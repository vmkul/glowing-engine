'use strict';

const sum = (a, b) => sum(a + b);
const func = () => console.log(sum(2, 3));

setInterval(func, 100);
console.log('some text');
