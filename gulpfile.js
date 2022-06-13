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
const { task, series, parallel } = require('gulp');
const del = require('del');

require('./tasks/icons');
require('./tasks/site');
require('./tasks/rsp');
require('./tasks/release');

task('clean', () =>
  del('dist')
);

task('build-spectrum-css-express-workflow', series(
  parallel(
    'copy-express-svg-files',
    'copy-express-sites-files',
    'copy-express-loadIcons',
    'copy-express-spectrum-css'
  ),
  'build-express-svg-css',
  'generate-svg-express-examples',
  'prepare-spectrum-css-ccx-workflow'
));

task('build-spectrum-css-workflow', series(
  parallel(
    'copy-svg-files',
    'copy-sites-files',
    'copy-loadIcons',
    'copy-spectrum-css'
  ),
  'build-svg-css',
  'generate-svg-examples',
  'generate-svg-color-examples',
  'prepare-spectrum-css-workflow'
));

task('build-rsp-worklfow', series(
  'babel-transpile-rsp',
  'prepare-rsp-workflow'
));

task('build', series(
  'clean',
  'icons',
  'build-rsp-worklfow',
  'build-spectrum-css-express-workflow',
  'build-spectrum-css-workflow'
));

task('default', series('build'));
