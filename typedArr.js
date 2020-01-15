'use strict';

const len = 128;
const buffer = new ArrayBuffer(len);
const view1 = new DataView(buffer);

for (let i = 0; i < len / 2; i++) {
  view1.setUint16(2 * i, 300);
}

for (let i = 0; i < len / 2; i++) {
  const number = view1.getUint16(2 * i);
  console.log(number);
}


//setInterval(() => {}, 1000);


