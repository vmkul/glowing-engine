'use strict';

const throttle = (fn, time, times) => {
  let count = 0;
  let timer = setInterval(() => count = 0, time);
  let func = (...args) => {
    if (count >= times) return;
    count++;
    return fn(...args);
  }  
  func.cancel = () => clearInterval(timer);
  return func;
}

const f = name => console.log('Hello, ' + name);
const throttled = throttle(f, 2000, 2);

throttled('Vova');
throttled('Vova');
throttled('Vova');

setTimeout(() => throttled('Vova'), 2100);
