const {task, series, src, dest, parallel} = require('gulp');
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
    .pipe(svgmin({
      plugins: [
        {removeViewBox: false}
      ]
    }))
    .pipe(replace(/<defs>[\s\S]*?<\/defs>/m, ''))
    .pipe(replace(/<title>[\s\S]*?<\/title>/m, ''))
    .pipe(svgmin({
      plugins: [
        {
          removeAttrs: {
            attrs: [
              'class',
              'data-name',
              'id'
            ]
          }
        },
        {collapseGroups: true},
        {removeViewBox: false}
      ]
    }))
    .pipe(rename(function (filePath) {
      filePath.basename = filePath.basename.replace(/S_(.*?)_.*/, '$1');
    }))
    .pipe(dest('icons/workflow/'))
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
        {removeViewBox: false}
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
    'icons/workflow/**/*.svg'
  ], 'spectrum-workflow-icons.svg')
);

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

task('icons', series(
  'delete-icons',
  'workflow-icons-monochrome'
));
