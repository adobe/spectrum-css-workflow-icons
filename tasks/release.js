const { task, src, dest } = require('gulp');
const rename = require('gulp-rename');

task('prepare-spectrum-css-workflow', () => prepareReleaseTask('COPYRIGHT', 'LICENSE', 'dist/spectrum-css-workflow-icons'));
task('prepare-spectrum-css-ccx-workflow', () => prepareReleaseTask('COPYRIGHT', 'LICENSE', 'dist/spectrum-css-ccx-workflow-icons'));
task('prepare-rsp-workflow', () => prepareReleaseTask('COPYRIGHT', 'LICENSE_rsp', 'dist/react-spectrum-workflow'));

const prepareReleaseTask =
  (copyright, license, destination) =>
    src([`./${copyright}`, `./${license}`])
      .pipe(rename(function (path) {
        if (path.basename == 'LICENSE_rsp') {
          path.basename = 'LICENSE';
        }
      }))
      .pipe(dest(destination));