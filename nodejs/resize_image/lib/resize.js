
const fs = require('fs');
const path = require('path');
const jimp = require('jimp');

module.exports = class {
  constructor(imgDir, outputDir) {
    this.imgDir = imgDir;
    this.outputDir = outputDir;
  }

  retrieveTargetFilePathList() {
    return new Promise((resolve, reject) => {
      fs.readdir(this.imgDir, (err, files) => {
        if (err) reject(err);

        const targetFiles = [];

        files.forEach((file) => {
          if (/out/.test(file)) {
            return;
          }

          // jpg以外はスキップ
          if (!file.match(/jpg/)) {
            return;
          }

          targetFiles.push(file);
        });

        resolve(targetFiles);
      });
    });
  }

  imageResize(file, height, width) {
    return new Promise((resolve, reject) => {
      const imageWritePath = `${this.outputDir}${path.basename(file, path.extname(file))}_out.jpg`;

      jimp.read(this.imgDir + file).then((lenna) => {
        lenna.resize(height, width)
          .quality(100)
          .greyscale()
          .write(imageWritePath);

        resolve(`${imageWritePath} is Resized.`);
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    });
  }
};
