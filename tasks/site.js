const {task, src, dest} = require('gulp');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const template = require('gulp-template');
const fs = require('fs');

task('copy-svg-files', () =>
  src('icons/workflow/**')
    .pipe(dest('dist/'))
);

task('copy-sites-files', () =>
  src([
    'sites/shared/**/*',
    'sites/svg/**/*'
  ])
    .pipe(dest('dist/sites'))
);

task('copy-loadIcons', () =>
  src('node_modules/loadicons/index.js')
    .pipe(rename('loadIcons.js'))
    .pipe(dest('dist/sites/lib/'))
);

task('copy-spectrum-css', () =>
  src([
    'node_modules/@adobe/spectrum-css/dist/*.css'
  ])
    .pipe(dest('dist/sites/spectrum-css/'))
);

task('build-svg-css', () =>
  src('dist/sites/spectrum-icons.styl')
    .pipe(stylus())
    .pipe(dest('dist/sites/'))
);

task('generate-svg-examples', () =>
  src('sites/svg/*.html')
    .pipe(template({
      svgsprite: fs.readFileSync('dist/spectrum-workflow-icons.svg', 'utf8'),
      icons: JSON.parse(fs.readFileSync('dist/icons.json', 'utf8'))
    }))
    .pipe(dest('dist/'))
);
