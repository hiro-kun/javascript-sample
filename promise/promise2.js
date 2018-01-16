const promiseSample = new Promise((resolve) => {
  setTimeout(() => {
    resolve('OK');
  }, 500);
});

promiseSample
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
