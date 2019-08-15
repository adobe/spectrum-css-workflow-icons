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
