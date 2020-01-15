'use strict';

const getMaxCallStack = i => {
  try {
    return getMaxCallStack(++i);
  } catch (e) {
    return i;
  }
}

console.log(getMaxCallStack(0));
