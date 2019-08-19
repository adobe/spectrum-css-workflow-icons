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
const File = require('vinyl');
const PluginError = require('plugin-error');

module.exports = function (fileName) {
  let expectedContents;

  function checkFile(file, encoding, callback) {
    let contents;
    // Ignore empty files
    if (file.isNull()) {
      contents = '';
    } else {
      contents = String(file.contents);
    }

    if (!expectedContents) {
      expectedContents = contents;
      callback();
    } else if (expectedContents !== contents) {
      this.emit('error', new PluginError('identical', file.path + ' is not identical'));
    } else {
      callback();
    }
  }

  function endStream(callback) {
    const file = new File();
    file.contents = Buffer.from(expectedContents);
    file.path = fileName || 'file.txt';

    this.push(file);
    callback();
  }

  return through.obj(checkFile, endStream);
};
