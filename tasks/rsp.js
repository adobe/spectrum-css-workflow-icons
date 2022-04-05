const { task, src, dest } = require('gulp');
const babel = require('gulp-babel');
const barrelIndex = require('../plugins/barrelIndex');

task('babel-transpile-rsp', () => createBabelTranspileTask('node_modules/@a4u/a4u-spectrum-open-source/assets/S_ReactFrameworkEssential/**/*', 'dist/react-spectrum-workflow/dist', `@adobe/react-spectrum-workflow (c) by Adobe

@adobe/react-spectrum-workflow is licensed under a
Creative Commons Attribution-NoDerivatives 4.0 International License.

You should have received a copy of the license along with this
work. If not, see <http://creativecommons.org/licenses/by-nd/4.0/>.`));

const createBabelTranspileTask =
  (source, destination, licenseHeader) =>
    src(source)
      .pipe(babel({
        'presets': [
          '@babel/preset-env',
          '@babel/preset-react'
        ],
        'plugins': [
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-proposal-export-namespace-from',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-syntax-jsx',
          'babel-plugin-react-svg',
          ['babel-plugin-add-header-comment', {
            'header': [
              licenseHeader
            ]
          }]
        ]
      }
      ))
      .pipe(barrelIndex())
      .pipe(dest(destination));