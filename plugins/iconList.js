var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');
var File = gutil.File;
var PluginError = gutil.PluginError;

module.exports = function(fileName) {
  var fileNames = [];

  function addFileName(file, encoding, callback) {
    fileNames.push(path.basename(file.path));
    callback();
  }

  function endStream(callback) {
    var file = new File();
    file.contents = new Buffer(JSON.stringify(fileNames, null, 2));
    file.path = fileName;

    this.push(file);
    callback();
  }

  return through.obj(addFileName, endStream);
};
