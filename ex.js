'use strict';

const ee = require('events');
const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

class Memoize extends ee {
  constructor(fn, limit) {
    super();
    this.fn = fn;
    this.limit = limit;
    this.cache = new Map();
  };

  execute(...args) {
    this.emit('exec');
    const key = generateKey(args);
    const val = this.cache.get(key);
    if (this.cache.has(key)) {
      this.emit('cache', key, val);
      console.log('From cache');
      return val;
    }
    const res = this.fn(...args);
    this.cache.set(key, res);
    if (this.cache.size > this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
      console.log('deleted ' + firstKey);
    }
    return res;
  };
};


// example

const func = (a, b) => a * b;
const memoized = new Memoize(func, 10);
memoized.on('cache', (key, val) => {
  console.log('fired!');
}).on('exec', (key, val) => {
  console.log('exec!');
});
memoized.execute(2, 3);
memoized.execute(3, 5);

const value = memoized.execute(2, 3);

console.log(value);