const through = require('through2');
const { File } = require('gulp-util');
const path = require('path');

module.exports = () => {
  const files = [];

  function addFileName(file, _, cb) {
    files.push(file);
    cb();
  }

  function endStream(cb) {
    let fileContent = '';

    for (let file of files) {
      const fileName = path.basename(file.basename, path.extname(file.basename));
      fileContent += `export * from './${fileName}';\n`;
      this.push(file);
    }

    const file = new File('utf8');
    file.contents = Buffer.from(fileContent);
    file.path = 'index.js';
    this.push(file);

    cb();
  }

  return through.obj(addFileName, endStream);
};
