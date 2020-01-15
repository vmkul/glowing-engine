'use strict';

const wrap = fn => {
  const wrapped = (...args) => {
    if (fn) {
      return fn(...args);
    }
  };
// todo: cancel, resume, timeout, limit
  wrapped.cancel = () => {
    fn = null;
    return wrapped;
  };

  return wrapped;
};

const sum2 = (a, b) => a + b;
const extended = wrap(sum2);

console.log(extended(2, 7));
extended.cancel();
console.log(extended(1, 7));
