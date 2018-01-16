const execA = new Promise((resolve) => {
  setTimeout(() => {
    console.log('execA');
    resolve();
  }, 20);
});

const execB = new Promise((resolve) => {
  setTimeout(() => {
    console.log('execB');
    resolve();
  }, 12);
});

Promise.all([execA, execB]).then(() => {
  console.log('All finish.');
}).catch((errorMessage) => {
  console.log(errorMessage);
});
