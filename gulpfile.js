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
require('./tasks/release');
require('./tasks/site');
require('./tasks/rsp');

task('clean', () =>
  del('dist')
);

task('build', series(
  'clean',
  parallel(
    'copy-svg-files',
    'copy-sites-files',
    'copy-loadIcons',
    'copy-spectrum-css'
  ),
  'build-svg-css',
  'generate-svg-examples',
  'generate-svg-color-examples',
  'babel-transpile-rsp'
));

task('default', series('build'));

