const ResizeImage = require('./lib/resize.js');

const resizeImage = new ResizeImage('img/', 'out/');

const main = async () => {
  const resizeTargetFileList = await resizeImage.retrieveTargetFilePathList();

  for (let i = 0; i < resizeTargetFileList.length; i += 1) {
    const result = await resizeImage.imageResize(resizeTargetFileList[i], 500, 500);
    console.log(result);
  }

  console.log('Process all finish.');
};

main();