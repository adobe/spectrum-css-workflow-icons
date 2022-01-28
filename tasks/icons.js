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
const { task, series, src, dest, parallel } = require('gulp');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');
const replace = require('gulp-replace');
const del = require('del');
const identical = require('../plugins/identical');
const iconList = require('../plugins/iconList');
const fs = require('fs');

task('delete-icons', () =>
  del([
    'temp',
    'icons'
  ])
);

task('clean-icons', () =>
  src('node_modules/@a4u/a4u-collection-spectrum-css-release/assets/*/*.svg')
    .pipe(replace(/<defs>[\s\S]*?<\/defs>/m, ''))
    .pipe(replace(/<title>[\s\S]*?<\/title>/m, ''))
    .pipe(svgmin({
      full: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            }
          }
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: [
              'class',
              'data-name',
              'id',
              '*:fill:((?!^none$).)*'
            ]
          }
        }
      ]
    }))
    .pipe(rename(function (filePath) {
      filePath.basename = filePath.basename.replace(/S_(.*?)_.*/, '$1');
    }))
    .pipe(dest('icons/workflow'))
);

task('clean-icons-color', () =>
  src([
    'node_modules/@a4u/a4u-collection-react-spectrum-open-source-color-icons-release/assets/24/*.svg'
  ]).pipe(replace(/<title>[\s\S]*?<\/title>/m, ''))
    .pipe(svgmin({
      full: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            }
          }
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: [
              'data-name'
            ]
          }
        }
      ]
    }))
    .pipe(rename((filePath) => {
      filePath.basename = filePath.basename.replace(/(.*?)\d+/, '$1');
    }))
    .pipe(dest('icons/workflow/color/24/'))
);

task('generate-opensource-iconlist',
  () => src('node_modules/@a4u/a4u-collection-react-spectrum-open-source-release/**/*.svg')
    .pipe(rename(function (filePath) {
      filePath.basename = filePath.basename.replace(/S_(.*?)_.*/, '$1');
    }))
    .pipe(iconList('opensource_icons.json'))
    .pipe(dest('temp/'))
);

task('generate-iconlist-18', () =>
  src('icons/workflow/18/*.svg')
    .pipe(iconList('icons_18.json'))
    .pipe(dest('temp/'))
);

task('generate-iconlist-24', () =>
  src('icons/workflow/24/*.svg')
    .pipe(iconList('icons_24.json'))
    .pipe(dest('temp/'))
);

task('generate-iconlist-color', () =>
  src('icons/workflow/color/24/*.svg')
    .pipe(iconList('icons-color.json'))
    .pipe(dest('icons/workflow/'))
);

// Ensure that the required sizes are provided for all icons -- excludes color since there's only one size
task('check-icons', () =>
  src('temp/icons_*.json')
    .pipe(identical('icons.json'))
    .pipe(dest('icons/workflow/'))
);

function generateSVGSprite(sources, filename) {
  return src(sources)
    .pipe(rename(function (path) {
      const name = path.dirname.split(path.sep);
      name.push(path.basename);
      path.basename = 'spectrum-icon-' + name.join('-');
    }))
    .pipe(svgmin({
      plugins: [
        { removeViewBox: false }
      ]
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename(filename))
    .pipe(dest('icons/workflow/'));
}

task('filter-icons', () => {
  const openSourceIcons = JSON.parse(fs.readFileSync('./temp/opensource_icons.json'));
  const availableIcons = JSON.parse(fs.readFileSync('./icons/workflow/icons.json'));

  const toBeRemovedIcons = availableIcons.filter(i => !openSourceIcons.includes(i)).map(i => `./icons/workflow/**/${i}`);
  return del(toBeRemovedIcons);
});

task('replace-iconlist', () =>
  src('./temp/opensource_icons.json')
    .pipe(rename(function (filePath) {
      filePath.basename = 'icons';
    }))
    .pipe(dest('icons/workflow/'))
);

task('generate-svgsprite', () =>
  generateSVGSprite([
    'icons/workflow/**/*.svg',
    '!icons/workflow/color/**/*'
  ], 'spectrum-icons.svg')
);

task('generate-svgsprite-color', () =>
  generateSVGSprite('icons/workflow/color/**/*.svg', 'spectrum-icons-color.svg')
);

task('workflow-icons-color', series(
  'clean-icons-color',
  'generate-iconlist-color',
  'generate-svgsprite-color'
));

task('workflow-icons-monochrome', series(
  'clean-icons',
  parallel(
    'generate-iconlist-18',
    'generate-iconlist-24',
    'generate-opensource-iconlist'
  ),
  'check-icons',
  'filter-icons',
  'replace-iconlist',
  'generate-svgsprite'
));

task('workflow-icons', parallel(
  'workflow-icons-monochrome',
  'workflow-icons-color'
));

task('icons', series(
  'delete-icons',
  'workflow-icons'
));
