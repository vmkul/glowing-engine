'use strict';

function* gen (begin, end, delta = 1) {
  let i = begin;
  while (i < end) {
    i += delta;
    if (i > end) return;
    yield i;
  }
};

const generator = gen(0, 30, 12);
/*
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (const val of generator) {
  console.log({ val });
}
*/
function* gen2 () {
  yield* generator;
};

const generator2 = gen2();
console.log([...generator2]);
