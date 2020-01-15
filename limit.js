'use strict';

const lim = (fn, limit) => {
  let count = 0;
  return (...args) => {
    if (count === limit) return;
    count++;
    return fn(args);
  }
}

const sayHi = () => console.log('Hi!');

const limited = lim(sayHi, 3);

limited();
limited();
limited();
limited();
