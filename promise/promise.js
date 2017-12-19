'use strict';

function getMessage(name) {
    return new Promise((resolve, reject) => {

        if (typeof name !== 'string') {
            reject('Input parameter must be string.');
        }

        const messageTemplate = 'My name is ';

        resolve(messageTemplate + name);

    });
}

const name = 'hoge huga';
// let name = 111;

getMessage(name)
    .then((message) => {
        console.log(message);
    }).catch((errorMessage) => {
        console.log(errorMessage);
    });
