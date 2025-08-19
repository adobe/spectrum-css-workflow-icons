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

async function index(sourcePath, outputPath) {
  const files = await fg(sourcePath);
  return fsp.writeFile(
    outputPath,
    files
      .reduce((lines, filepath) => {
        lines.push(`export * from './${path.basename(filepath, ".js")}';`);
        return lines;
      }, [])
      .join("\n"),
    "utf8"
  );
}

exports.default = async function main({ clean = true, verbose = false } = {}) {
  const sourcePath = path.join(rootPath, "icons");

  if (!fs.existsSync(sourcePath)) {
    const message = `⚠️  Unable to find ${sourcePath}\n`;
    process.stderr.write(message);
    return Promise.reject(new Error(message));
  }

  if (clean) {
    if (verbose) process.stdout.write("\n🧹 Cleaning publish directories...\n\n");
    await rimraf(["src", "public", "dist"], {
      cwd: rootPath,
    });
  }

  // Ensure directories exist
  await Promise.all([
    fsp.mkdir("src", { recursive: true }),
    fsp.mkdir("public", { recursive: true }),
    fsp.mkdir("dist", { recursive: true }),
  ]);

  return copyFromSource(sourcePath, path.join(rootPath, "dist"), { verbose }).then(() =>
    (index("dist/assets/components/*.js", "dist/assets/components/index.js")).then(() => {
      if (verbose) process.stdout.write("✅ Success: ready to publish\n\n");
    })
  );
};
