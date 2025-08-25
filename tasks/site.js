/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const _ = require('lodash');
const { rimraf } = require('rimraf');

const { rootPath, copyFromSource, index } = require('./utilities');

/**
 * @description Generate HTML page from template using lodash
 * @returns {Promise<void>}
 */
async function build({ verbose = false } = {}) {
  const outputPath = path.join(rootPath, 'dist');
  const templatePath = path.join(rootPath, 'sites/index.html');

  const templateContent = fs.readFileSync(templatePath, 'utf8');
  const html = _.template(templateContent)?.({
    title: 'Workflow icons',
    svgsprite: 'assets/svg-spriteSheet/icons.svg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    manifest: JSON.parse(fs.readFileSync('dist/manifest.json', 'utf8')),
  });
  return fsp.writeFile(path.join(outputPath, 'index.html'), html, 'utf8');
}

exports.default = async function main({
    clean = true,
    verbose = false,
  } = {}) {
    if (clean) {
      process.stdout.write('🧹 Cleaning site directories...\n\n');
      await rimraf(['dist'], {
        cwd: rootPath,
        ignore: ['components', 'svg', 'manifest.json', 'svg-spriteSheet']
      });
    }

    // Ensure directories exist
    await Promise.all([
        fsp.mkdir('src', { recursive: true }),
    ]);

    // Copy assets
    await Promise.all([
        copyFromSource('icons/', 'dist', { verbose }),
        copyFromSource('node_modules/loadicons/', 'dist/node_modules/loadicons', { verbose, glob: ['index.js']}),
        copyFromSource('node_modules/@spectrum-css/', 'dist/node_modules/@spectrum-css', { verbose }),
        copyFromSource('sites/', 'dist', { glob: ['*.css'], verbose }),
    ]);

    await index("dist/assets/components/*.js", "dist/assets/components/index.js");

    return build({ verbose }).then(() => Promise.all([
    ])).then(() => {
        process.stdout.write('✅ Success: ready to preview\n\n');
    });
  }
