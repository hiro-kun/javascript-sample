'use strict';

const IMG_DIR = 'img/';
const IMG_OUTPUT_DIR = 'out/';
const IMG_HEIGHT = 500;
const IMG_WIDTH = 500;

const jimp = require('jimp');

/**
 * リサイズ対象画像ファイルパスを取得
 *
 * @return {array} リサイズ対象ファイル
 * @throws {object} エラーオブジェクト
*/
function retrieveTargetFilePathList()
{
    return new Promise((resolve, reject) => {
        const fs = require('fs');

        fs.readdir(IMG_DIR, (err, files) => {

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

/**
 * 画像リサイズ
 *
 * @param {array} リサイズ対象ファイル
 * @throws {string} エラーメッセージ
*/
function imageResize(file)
{
    const path = require('path');
    const image_write_path =  `${IMG_OUTPUT_DIR}${path.basename(file, path.extname(file))}_out.jpg`;

    jimp.read(IMG_DIR + file).then(lenna => {
        lenna.resize(IMG_HEIGHT, IMG_WIDTH)
            .quality(100)
            .greyscale()
            .write(image_write_path);
    }).then(() => {
        console.log(image_write_path + ' is Resized.');
    }).catch(err => {
        console.log('Image resize error.');
        console.log(err);
    });
}




retrieveTargetFilePathList()
    .then((files) => {
        Promise.all(files.map(file => {
            imageResize(file);
        }));
    }).catch((error) => {
        console.log(error);
    });
