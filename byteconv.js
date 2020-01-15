'use strict';

const conv = bytes => {
  const typearr = ['klb', 'mb', 'gb', 'tb'];
  for (let i = 1; i <= typearr.length ; i++) {
    let val = bytes / (1024 ** i);
    if (val < 1024) {
      return val.toFixed(3).toString() + ' ' + typearr[i - 1];
    }
  }
};

console.log(conv(1024 ** 4));