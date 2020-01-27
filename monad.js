'use strict';

const Functor = val => {
  const f = fn => {
    const res = (fn && val) ? fn(val) : null;
    return Functor(res);
  }
  return f;
}

// Ex
const func1 = Functor(10);
const func2 = Functor(null);
func1(x => 2 * x)(x => ++x)(console.log);
func2(x => 2 * x)(x => ++x)(console.log);


function Monad(x) {
  this.val = x;
}

Monad.prototype.chain = function(fn) {
  const res = (fn && this.val) ? fn(this.val) : null;
  this.val = res;
  return this;
}

Monad.prototype.map = function(fn) {
  const res = (fn && this.val) ? fn(this.val) : null;
  return new Monad(res);
}

Monad.prototype.ap = function(monad) { 
  const fn = monad.val;
  const res = (fn && this.val) ? fn(this.val) : null;
  this.val = res;
  return this;
}

// Ex
const mon1 = new Monad(10);
const mon2 = new Monad(x => x / 2);
const mon3 = new Monad(null);
mon1.map(x => x * 2).map(x => ++x).ap(mon2).map(console.log);
mon3.map(x => x * 2).map(x => ++x).ap(mon2).map(console.log);