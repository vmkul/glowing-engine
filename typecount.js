'use strict';

const mass = ['string', 12, true, {}, 1, 2, false, 'example'];

const count = arr => {
  const types = {};
  arr.forEach((val) => {
    const type = typeof val;
    if (Object.keys(types).includes(type)) { types[type]++; }
    else {
      types[type] = 1;
    }
  });
  console.log(types);
  return types;
};

const forcount = arr => {
  const types = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const type = typeof element;
    if (Object.keys(types).includes(type)) { types[type]++; }
    else {
      types[type] = 1;
    }
  }
  console.log(types);
  return types;
};


forcount(mass);