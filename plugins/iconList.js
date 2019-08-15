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
