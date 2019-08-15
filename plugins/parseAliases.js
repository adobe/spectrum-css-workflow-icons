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
