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

const fg = require("fast-glob");
const { rimraf } = require("rimraf");

const { rootPath, copyFromSource } = require('./utilities');

require('colors');

/**
 * @description Create a manifest file of all the icons in the icons directory
 * @param {*} outputPath - The relative path to write the manifest file to
 * @returns
 */
async function manifest(
  outputPath = path.join(rootPath, "icons", "manifest.json")
) {
  const files = await fg("{components,react,svg}/*", {
    cwd: path.join(rootPath, "icons", "assets"),
    isFile: true,
  });
  const iconList = files.reduce((lines, filepath) => {
    const folderName = path.dirname(filepath);
    console.log(folderName);
    if (!lines[folderName]) {
      lines[folderName] = [];
    }

    lines[folderName].push(path.basename(filepath));

    return lines;
  }, {});
  return fsp.writeFile(outputPath, JSON.stringify(iconList, null, 2), "utf8");
}

exports.default = async function main({ clean = true, verbose = false } = {}) {
  let sourcePath;
  try {
    sourcePath = require.resolve(
      "@a4u/a4u-s2-icon-global-set-open-source-processed/package.json"
    );
  } catch (error) {
    process.stdout.write(`\n⚠️  Unable to find ${"@a4u/a4u-s2-icon-global-set-open-source-processed".yellow} package. Check that you have appropriate permissions to update icons from the private ${"@a4u".cyan} scope and that the package is installed per the ${"README".gray} instructions.\n`);
    process.stdout.write(`\n${"Skipping icon refresh.".underline}\n\n`);
    return Promise.resolve();
  }

  if (clean) {
    process.stdout.write("\n🧹 Cleaning icons directory...\n\n");
    await rimraf(["icons"], {
      cwd: rootPath,
    });
  }

  // Ensure directory exists
  await fsp.mkdir("icons", { recursive: true });

  // Copy assets from the source package to the icons directory
  process.stdout.write(`💾  Copy source assets from ${path.relative(rootPath, sourcePath)}\n\n`);
  await copyFromSource(
    path.dirname(sourcePath),
    path.join(rootPath, "icons"),
    {
      verbose,
      ignore: ['package.json', 'CHANGELOG.md', 'index.ts']
    }
  );

  process.stdout.write("🔄 Refreshing manifest...\n\n");
  return manifest().then(() => {
    process.stdout.write("✅ Success: icons refreshed\n\n");
  });
};
