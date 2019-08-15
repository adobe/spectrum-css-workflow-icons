var gulp = require('gulp');

require('./tasks/icons');
require('./tasks/release');
require('./tasks/react');

gulp.task('build', gulp.series('icons', 'react'));

gulp.task('default', gulp.series('build'));
