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

/** @type {string} */
const rootPath = path.join(__dirname, '..');

/**
 * @description Copy assets from the source path to the destination directory
 * @param {string} sourcePath
 * @param {string} destPath
 * @param {Object} options
 * @param {string[]} options.glob
 * @param {boolean} options.verbose
 * @returns {Promise<void>}
 */
async function copyFromSource(sourcePath, destPath, {
    glob = ["**"],
    ignore,
    verbose = false,
} = {}) {
    process.stdout.write(`💾  Copy source assets from ${path.relative(rootPath, sourcePath)}\n\n`);

    const files = await fg(glob, { cwd: sourcePath, ignore });

    if (files.length === 0 || !files) {
        const message = `⚠️  No files detected at ${path.relative(rootPath, sourcePath)} matching the provided glob \"${glob.join(", ")}\"\n`;
        process.stderr.write(message);
        return Promise.reject(new Error(message));
    }

    const promises = [];

    if (verbose) process.stderr.write(`Copying ${files.length} files from source:\n`);

    for (const file of files) {
      const inputPath = path.join(sourcePath, file);
      const outputPath = path.join(destPath, file);

      promises.push(
        fsp
          .mkdir(path.dirname(outputPath), { recursive: true })
          .then(() =>
            fsp
              .copyFile(inputPath, outputPath)
              .then(() => {
                if (verbose)
                  process.stdout.write(`  ${path.relative(rootPath, inputPath)} -> ${path.relative(rootPath, outputPath)}\n`);
              })
              .catch((err) => {
                if (err.message) process.stderr.write(err.message);
              })
          )
          .catch((err) => {
            if (err.message) process.stderr.write(err.message);
          })
      );
    }

    return Promise.all(promises);
}

async function index(sourcePath, outputPath) {
  const files = await fg(sourcePath);
  const format = path.extname(outputPath).slice(1);
  const content = `${format !== "js" ? `{
  "icons": [\n` : ""}${
      files
        .reduce((lines, filepath) => {
          if (format === "js") lines.push(`export * from './${path.basename(filepath, ".js")}';`);
          else lines.push(`    "${path.basename(filepath)}"`);
          return lines;
        }, [])
        .join(",\n")
      }${format !== "js" ? `\n  ]\n}\n` : "\n"}`;
  return fsp.writeFile(outputPath, content, "utf8");
}

module.exports = {
    rootPath,
    index,
    copyFromSource,
};
