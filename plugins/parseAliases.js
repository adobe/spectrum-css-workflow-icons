/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const through = require('through2');
const path = require('path');
const File = require('vinyl');
const PluginError = require('plugin-error');

module.exports = function (filename) {
  const aliases = {};

  function bufferAliases(file, encoding, callback) {
    // Ignore empty files
    if (file.isNull()) {
      callback();
      return;
    }

    let metadata;
    // Resolve the colors in the color stop
    try {
      metadata = JSON.parse(String(file.contents));
    } catch (err) {
      this.emit('error', new PluginError('parseAliases', 'Failed to parse metadata for ' + path.basename(file.path) + ': ' + err.message));
    }

    const name = metadata['athena:title'];
    if (metadata['athena:alias']) {
      const iconAliases = metadata['athena:alias'];
      if (typeof iconAliases === 'string') {
        aliases[name] = [iconAliases];
      }
      aliases[name] = iconAliases;
    }

    callback();
  }

  function endStream(callback) {
    const file = new File();
    file.contents = new Buffer(JSON.stringify(aliases));
    file.path = filename;

    this.push(file);
    callback();
  }

  return through.obj(bufferAliases, endStream);
};
