'use strict';

const wrapAsync = fn => (...args) => setTimeout(() => fn(...args),
  Math.floor(Math.random() * 5000));

const sleep = time => {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, time)
  });
  return promise;
};

const Func = async name => {
  await sleep(3000);
  return name;
};

const asyncFunc = wrapAsync(Func);
asyncFunc();

(async () => {

  console.time('1');
  const data = await Func('async.js');
  console.log(data);
  console.timeEnd('1');

})();