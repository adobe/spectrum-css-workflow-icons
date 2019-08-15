var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');
var File = gutil.File;
var PluginError = gutil.PluginError;

module.exports = function(filename) {
  var aliases = {};

  function bufferAliases(file, encoding, callback) {
    // Ignore empty files
    if (file.isNull()) {
      callback();
      return;
    }

    // Resolve the colors in the color stop
    try {
      var metadata = JSON.parse(String(file.contents));
    }
    catch (err) {
      this.emit('error', new PluginError('parseAliases', 'Failed to parse metadata for '+path.basename(file.path)+': '+err.message));
    }

    var name = metadata['athena:title'];
    if (metadata['athena:alias']) {
      var iconAliases = metadata['athena:alias'];
      if (typeof iconAliases === 'string') {
        aliases[name] = [iconAliases];
      }
      aliases[name] = iconAliases;
    }

    callback();
  }

  function endStream(callback) {
    var file = new File();
    file.contents = new Buffer(JSON.stringify(aliases));
    file.path = filename;

    this.push(file);
    callback();
  }

  return through.obj(bufferAliases, endStream);
};
