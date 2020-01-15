'use strict';

const random = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const analyse = arr => {
  const analysis = new Map();
  for (const element of arr) {
    let value = analysis.get(element);
    if (value) {analysis.set(element, ++value);} else {
    analysis.set(element, 1);
    }
  }
  return analysis;
}
const mass = [];
for (let i = 0; i < 100; i++) {
  mass.push(random(0, 10));
}

let map = analyse(mass);

for (const e of map) {
  console.log(e);
}
