'use strict';

module.exports = class {

    constructor(img_dir, img_output_dir) {
        this.img_dir = 'img/';
        this.output_dir = 'out/';
    }

    retrieveTargetFilePathList()
    {
        return new Promise((resolve, reject) => {
            const fs = require('fs');

            fs.readdir(this.img_dir, (err, files) => {

                if (err) reject(err);

                const target_files = [];

                files.forEach(file => {

                    if (/out/.test(file)) {
                        return;
                    }

                    // jpg以外はスキップ
                    if (!file.match(/jpg/)) {
                        return;
                    }

                    target_files.push(file);
                });

                resolve(target_files);
            });
        });
    }

    imageResize(file, height, width)
    {
        return new Promise((resolve, reject) => {
            const path = require('path');
            const jimp = require('jimp');
            const image_write_path = `${this.output_dir}${path.basename(file, path.extname(file))}_out.jpg`;

            jimp.read(this.img_dir + file).then(lenna => {
                lenna.resize(height, width)
                    .quality(100)
                    .greyscale()
                    .write(image_write_path);

                resolve(image_write_path + ' is Resized.');

            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
};
