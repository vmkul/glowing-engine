'use strict';

const matrix = {
  a11: 1, a12: 2, a13: -2,
  a21: 2, a22: 1, a23: -1,
  a31: 3, a32: 1, a33: 4,}

const det = mat => {
  const result = mat.a11*mat.a22*mat.a33 + mat.a21*mat.a32*mat.a13 + mat.a12*mat.a23*mat.a31 -
  (mat.a31*mat.a22*mat.a13 + mat.a21*mat.a12*mat.a33 + mat.a32*mat.a23*mat.a11)
  return result;
}

console.log(det(matrix));
