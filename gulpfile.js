const {task, series, parallel} = require('gulp');
const del = require('del');

require('./tasks/icons');
require('./tasks/release');
require('./tasks/site');

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
  'generate-svg-examples'
));

task('default', series('build'));

