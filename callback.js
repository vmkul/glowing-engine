'use strict';

const adder = init => {
  let value = init;
  const add = delta => {
    value += delta;
    if (value >= add.maxValue) add.maxEvent(value);
    return add;
  };
  add.max = (max, event) => {
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};

const maxReached = value => {
  console.log('max value reached :' + value);
};

const a1 = adder(0).max(100, maxReached);

a1(85);
a1(-15);
a1(30);
a1(-1000);
a1(2500);
throw new error (what);
