'use strict';

const m = [
  [1, 0, 0, 0],
  [5, 1, 0, 0],
  [2, 7, 1, 0],
  [5, 3, 1, 1], 
];

const mirror = matrix => {
  for (const row of matrix) {
    const i = matrix.indexOf(row);
    for (const element of row) {
      const j = row.indexOf(element);
      if (i > j) matrix[j][i] = element;
    }
  }
  return matrix;
};

mirror(m);
for (const row of m) {
  console.log(row);
};