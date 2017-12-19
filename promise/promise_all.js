'use strict';


// 各処理が並列で実行された後にthenが実行される

const execA = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log('execA');
        resolve();
    }, 20);
});

const execB = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log('execB');
        resolve();
    }, 12);
});

Promise.all([execA, execB]).then(function () {
    console.log('All finish.');
}).catch((errorMessage) => {
    console.log(errorMessage);
});
