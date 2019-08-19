/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const gulp = require('gulp');
const git = require('gulp-git');
const bump = require('gulp-bump');

const fs = require('fs');
const inq = require('inquirer');
const semver = require('semver');
const exec = require('child_process').exec;

function getPackage() {
  return JSON.parse(fs.readFileSync('package.json', 'utf8'));
}

gulp.task('do-release', function (cb) {
  const package = getPackage();

  const releaseVersion = package.version;
  const releaseMessage = '@release - Releasing [' + releaseVersion + ']';

  // Commit
  gulp.src([
    '.'
  ])
    .pipe(git.add({args: '.'}))
    .pipe(git.commit(releaseMessage))
    .on('end', function () {
      // Push
      git.push('origin', 'master', function (err) {
        if (err) {
          return cb(err);
        }

        git.tag(releaseVersion, releaseMessage, function (err) {
          if (err) {
            return cb(err);
          }

          git.push('origin', releaseVersion, function (err) {
            if (err) {
              return cb(err);
            }

            exec('npm publish -q --scope=@spectrum --registry=https://artifactory.corp.adobe.com:443/artifactory/api/npm/npm-spectrum-snapshot-local/', function (err, stdout, stderr) {
              console.log(stdout);
              if (err) {
                console.log(stderr);
                return cb(err);
              }
              cb();
            });
          });
        });
      });
    });
});

/**
 Optional args:
 --patch - Specify a patch release
 --minor - Specify a minor release
 --major - Specify a major release
 --prerelease - Specify a prerelease
 --prepatch - Specify a patch prerelease
 --preminor - Specify a minor prerelease
 --premajor - Specify a major prerelease
 */
gulp.task('bump-version', function (cb) {
  function doVersionBump() {
    releaseMessage = '@release - Releasing [' + releaseVersion + ']';
    gulp.src('./package.json')
      .pipe(bump({version: releaseVersion}))
      .pipe(gulp.dest('./'))
      .pipe(git.commit(releaseMessage))
      .on('end', cb);
  }

  const package = getPackage();

  // The version we'll actually release
  let releaseVersion = null;
  let releaseMessage = '';

  // Potential versions
  const patchVersion = semver.inc(package.version, 'patch');
  const minorVersion = semver.inc(package.version, 'minor');
  const majorVersion = semver.inc(package.version, 'major');
  const preVersion = semver.inc(package.version, 'prerelease', 'beta');
  const preMajorVersion = semver.inc(package.version, 'premajor', 'beta');
  const preMinorVersion = semver.inc(package.version, 'preminor', 'beta');
  const prePatchVersion = semver.inc(package.version, 'prepatch', 'beta');

  // Command line bump shortcuts
  if (gutil.env.pre) {
    releaseVersion = preVersion
  } else if (gutil.env.patch) {
    releaseVersion = patchVersion
  } else if (gutil.env.minor) {
    releaseVersion = minorVersion
  } else if (gutil.env.major) {
    releaseVersion = majorVersion
  } else if (gutil.env.prepatch) {
    releaseVersion = prePatchVersion
  } else if (gutil.env.preMinorVersion) {
    releaseVersion = prePatchVersion
  } else if (gutil.env.preMajorVersion) {
    releaseVersion = prePatchVersion
  }

  if (releaseVersion) {
    doVersionBump();
  } else {
    let choices = [
      {
        name: 'patch - ' + patchVersion,
        value: patchVersion
      },
      {
        name: 'minor - ' + minorVersion,
        value: minorVersion
      },
      {
        name: 'major - ' + majorVersion,
        value: majorVersion
      }
    ];

    if (package.version.match('-beta')) {
      choices = [
        {
          name: 'prerelease - ' + preVersion,
          value: preVersion
        },
        {
          name: 'release - ' + patchVersion,
          value: patchVersion
        }
      ];
    }

    choices = choices.concat([
      {
        name: 'prepatch - ' + prePatchVersion,
        value: prePatchVersion
      },
      {
        name: 'preminor - ' + preMinorVersion,
        value: preMinorVersion
      },
      {
        name: 'premajor - ' + preMajorVersion,
        value: preMajorVersion
      }
    ]);

    inq.prompt([{
      type: 'list',
      name: 'version',
      message: 'What version would you like?',
      choices: choices
    }])
      .then(function (res) {
        // Use command-line arguments, if provided
        releaseVersion = res.version;

        doVersionBump();
      });
  }
});

/**
 Optional args:
 --confirm - Don't ask for confirmation
 */
gulp.task('release', gulp.series('bump-version', function (releaseDone) {
  function beginRelease() {
    gulp.series(
      'build',
      'do-release',
      function (done) {
        done();
        releaseDone();
      }
    );
  }

  const package = getPackage();

  // Command line shortcut
  if (gutil.env.confirm) {
    beginRelease();
  } else {
    inq.prompt({
      type: 'confirm',
      name: 'confirmed',
      message: 'Release ' + package.version + '?'
    })
      .then(function (res) {
        if (res.confirmed) {
          beginRelease();
        } else {
          releaseDone();
        }
      });
  }
}));
