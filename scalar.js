'use strict';

const inc = n => n*2;
const func = Num => Num.n*=2;

const a = 5;
const b = inc(a);

const obj = {n: 5};
func(obj);


console.dir({a, b});
console.dir(obj);
