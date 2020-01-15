'use strict';

const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

const memoize = (fn, limit) => {
  const cache = new Map();
  return (...args) => {
    const key = generateKey(args);
    const val = cache.get(key);
    if (cache.has(key)) {console.log('From cache'); return val;}
    const res = fn(...args);
    cache.set(key, res);
    if (cache.size > limit) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
      console.log('deleted ' + firstKey);
    }
    return res;
  }
}
              
const sum2 = (a, b) => a + b;
const memo = memoize(sum2, 3);
console.log(memo(9, 15));
console.log(memo(5, 8));
console.log(memo(5, 8));
