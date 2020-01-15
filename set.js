'use strict';

const arr = [1, 2, 2, 5, 3, 4, 4];
const arr1 = [5, 5, 5, 4];

const diff = (a1, a2) => {
  const s1 = new Set(a1);
  const s2 = new Set(a2);
  const res = new Set([...s1].filter(v => !s2.has(v)));
  return [...res];
}

console.log(diff(arr, arr1));