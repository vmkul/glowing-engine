'use strict';

const compose = (...fns) => (...args) => {
  if (fns.length === 1) return fns[0](...args);

  let res = fns[0](...args);
  for (let i = 1; i < fns.length; i++) {
    res = fns[i](res);
  }
  return res;
}

const inc = x => ++x;
const times2 = x => 2*x;
const pow = x => Math.pow(x, 2);

const comp = compose(inc, times2, pow);

console.log(comp(2));
