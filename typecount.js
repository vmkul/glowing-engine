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

count(mass);