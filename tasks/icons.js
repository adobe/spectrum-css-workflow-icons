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
const iconList = require('../plugins/iconList');
const fs = require('fs');

task('delete-icons', () =>
  del(['icons'])
);

task('clean-icons', () =>
  src('node_modules/@a4u/a4u-spectrum-open-source/assets/*/*.svg')
    .pipe(replace(/class=\"fillPale\"/g, 'opacity="0.2"'))
    .pipe(replace(/class=\"fillMedium\"/g, 'opacity="0.5"'))
    .pipe(svgmin({
      full: true,
      plugins: [
        'inlineStyles',
        'convertStyleToAttrs',
        'removeStyleElement',
        'removeEmptyContainers',
        'removeTitle',
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
      filePath.dirname = filePath.dirname.split('_').pop();
    }))
    .pipe(dest('icons/spectrum-css/workflow'))
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
    .pipe(dest('icons/spectrum-css/workflow/color/24/'))
);

task('clean-icons-express', () =>
  src('node_modules/@a4u/a4u-spectrum-express-open-source/assets/*/*.svg')
    .pipe(replace(/class=\"fillPale\"/g, 'opacity="0.2"'))
    .pipe(replace(/class=\"fillMedium\"/g, 'opacity="0.5"'))
    .pipe(svgmin({
      full: true,
      plugins: [
        'inlineStyles',
        'convertStyleToAttrs',
        'removeStyleElement',
        'removeEmptyContainers',
        'removeTitle',
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
      const [_, basename, size] = filePath.basename.split('_');
      filePath.basename = basename;
      filePath.dirname = size;
    }))
    .pipe(dest('icons/spectrum-css-express/workflow'))
);

task('generate-iconlist-color', () =>
  src('icons/spectrum-css/workflow/color/24/*.svg')
    .pipe(iconList('icons-color.json'))
    .pipe(dest('icons/spectrum-css/workflow/'))
);

task('generate-iconlist-express', () =>
  src('icons/spectrum-css-express/workflow/18/*.svg')
    .pipe(iconList('icons.json'))
    .pipe(dest('icons/spectrum-css-express/workflow/'))
);

task('generate-iconlist', () =>
  src('icons/spectrum-css/workflow/18/*.svg')
    .pipe(iconList('icons.json'))
    .pipe(dest('icons/spectrum-css/workflow/'))
);

function generateSVGSprite(sources, filename, destination) {
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
    .pipe(dest(destination));
}

task('generate-svgsprite', () =>
  generateSVGSprite([
    'icons/spectrum-css/workflow/**/*.svg',
    '!icons/spectrum-css/workflow/color/**/*'
  ], 'spectrum-icons.svg', 'icons/spectrum-css/workflow/')
);

task('generate-svgsprite-color', () =>
  generateSVGSprite('icons/spectrum-css/workflow/color/**/*.svg', 'spectrum-icons-color.svg', 'icons/spectrum-css/workflow/')
);

task('generate-svgsprite-express', () =>
  generateSVGSprite([
    'icons/spectrum-css-express/workflow/**/*.svg',
  ], 'spectrum-express-icons.svg', 'icons/spectrum-css-express/workflow/')
);

task('workflow-icons-color', series(
  'clean-icons-color',
  'generate-iconlist-color',
  'generate-svgsprite-color'
));

task('workflow-icons-monochrome', series(
  'clean-icons',
  'generate-iconlist',
  'generate-svgsprite'
));

task('workflow-icons-express', series(
  'clean-icons-express',
  'generate-iconlist-express',
  'generate-svgsprite-express'
));

task('workflow-icons', parallel(
  'workflow-icons-monochrome',
  'workflow-icons-color',
  'workflow-icons-express'
));

task('icons', series(
  'delete-icons',
  'workflow-icons'
));
