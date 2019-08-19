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

module.exports = function (fileName) {
  const fileNames = [];

  function addFileName(file, encoding, callback) {
    fileNames.push(path.basename(file.path));
    callback();
  }

  function endStream(callback) {
    const file = new File();
    file.contents = Buffer.from(JSON.stringify(fileNames, null, 2));
    file.path = fileName;

    this.push(file);
    callback();
  }

  return through.obj(addFileName, endStream);
};
