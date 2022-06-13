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
const { task, src, dest } = require('gulp');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const template = require('gulp-template');
const fs = require('fs');

task('copy-svg-files', () =>
  src('icons/spectrum-css/workflow/**')
    .pipe(dest('dist/spectrum-css-workflow-icons/dist'))
);

task('copy-sites-files', () =>
  src([
    'sites/shared/**/*',
    'sites/svg/**/*'
  ])
    .pipe(dest('dist/spectrum-css-workflow-icons/dist/sites'))
);

task('copy-loadIcons', () =>
  src('node_modules/loadicons/index.js')
    .pipe(rename('loadIcons.js'))
    .pipe(dest('dist/spectrum-css-workflow-icons/dist/sites/lib/'))
);

task('copy-spectrum-css', () =>
  src([
    'node_modules/@adobe/spectrum-css/dist/*.css',
    'node_modules/@adobe/spectrum-css/dist/icons/spectrum-css-icons.svg'
  ])
    .pipe(dest('dist/spectrum-css-workflow-icons/dist/sites/spectrum-css/'))
);

task('build-svg-css', () =>
  src('dist/spectrum-css-workflow-icons/dist/sites/spectrum-icons.styl')
    .pipe(stylus())
    .pipe(dest('dist/spectrum-css-workflow-icons/dist/sites/'))
);

task('generate-svg-examples', () =>
  src('sites/svg/index.html')
    .pipe(template({
      svgsprite: fs.readFileSync('dist/spectrum-css-workflow-icons/dist/spectrum-icons.svg', 'utf8'),
      icons: JSON.parse(fs.readFileSync('dist/spectrum-css-workflow-icons/dist/icons.json', 'utf8'))
    }))
    .pipe(dest('dist/spectrum-css-workflow-icons/dist'))
);

task('generate-svg-color-examples', () =>
  src('sites/svg/color.html')
    .pipe(template({
      svgsprite: fs.readFileSync('dist/spectrum-css-workflow-icons/dist/spectrum-icons-color.svg', 'utf8'),
      icons: JSON.parse(fs.readFileSync('dist/spectrum-css-workflow-icons/dist/icons-color.json', 'utf8'))
    }))
    .pipe(dest('dist/spectrum-css-workflow-icons/dist'))
);

task('copy-express-svg-files', () =>
  src('icons/spectrum-css-express/workflow/**')
    .pipe(dest('dist/spectrum-css-ccx-workflow-icons/dist'))
);

task('copy-express-sites-files', () =>
  src([
    'sites/shared/**/*',
    'sites/svg/**/*'
  ])
    .pipe(dest('dist/spectrum-css-ccx-workflow-icons/dist/sites'))
);

task('copy-express-loadIcons', () =>
  src('node_modules/loadicons/index.js')
    .pipe(rename('loadIcons.js'))
    .pipe(dest('dist/spectrum-css-ccx-workflow-icons/dist/sites/lib/'))
);

task('copy-express-spectrum-css', () =>
  src([
    'node_modules/@adobe/spectrum-css/dist/*.css',
    'node_modules/@adobe/spectrum-css/dist/icons/spectrum-css-icons.svg'
  ])
    .pipe(dest('dist/spectrum-css-ccx-workflow-icons/dist/sites/spectrum-css/'))
);

task('build-express-svg-css', () =>
  src('dist/spectrum-css-ccx-workflow-icons/dist/sites/spectrum-icons.styl')
    .pipe(stylus())
    .pipe(dest('dist/spectrum-css-ccx-workflow-icons/dist/sites/'))
);

task('generate-svg-express-examples', () =>
  src('sites/svg/express.html')
    .pipe(template({
      svgsprite: fs.readFileSync('dist/spectrum-css-ccx-workflow-icons/dist/spectrum-express-icons.svg', 'utf8'),
      icons: JSON.parse(fs.readFileSync('dist/spectrum-css-ccx-workflow-icons/dist/icons.json', 'utf8'))
    }))
    .pipe(dest('dist/spectrum-css-ccx-workflow-icons/dist'))
);
