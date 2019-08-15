var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');
var File = gutil.File;
var PluginError = gutil.PluginError;

module.exports = function(fileName) {
  var expectedContents;

  function checkFile(file, encoding, callback) {
    // Ignore empty files
    if (file.isNull()) {
      contents = '';
    }
    else {
      var contents = String(file.contents);
    }

    if (!expectedContents) {
      expectedContents = contents;
      callback();
    }
    else if (expectedContents !== contents) {
      this.emit('error', new PluginError('identical', file.path+' is not identical'));
    }
    else {
      callback();
    }
  }

  function endStream(callback) {
    var file = new File();
    file.contents = new Buffer(expectedContents);
    file.path = fileName || 'file.txt';

    this.push(file);
    callback();
  }

  return through.obj(checkFile, endStream);
};
