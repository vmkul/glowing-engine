'use strict';

const curry = fn => (...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, args);
    return curry(f);
  } else {
    return fn(...args);
  }
}


const times4 = (a, b, c, d) => a * b * c * d;

const curried = curry(times4);
const res = curried(1)(2, 3, 4);
console.log(res);
// partial
const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));

const a1 = partial(times4, 2, 3);
const a2 = partial(a1, 1);
const a3 = a2(4);

console.log(a3);
