
const exec = (message, ms) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(message);

    resolve();
  }, ms);
});

const hello = async () => {
  await exec('exec1', 500);
  await exec('exec2', 300);
  await exec('exec3', 200);
  await exec('exec4', 100);

  console.log('finish');
};

hello();


/*
・awaitをつけない場合の結果

    finish
    exec4
    exec3
    exec2
    exec1
*/

/*
・awaitを付与した場合の結果

    exec1
    exec2
    exec3
    exec4
    finish
*/
