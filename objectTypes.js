'use strict';

const mass = ['string', 12, true, {}, 1, 2, false, 'example'];
const object = {string: 0, number: 0, boolean: 0, object: 0};

for (const type of mass) {
  switch (typeof type) {
    case 'string': object.string++;
    break;
    case 'boolean': object.boolean++;
    break;
    case 'number': object.number++;
    break;
    case 'object': object.object++;
    break;
    default: console.log('default');
    break;
  }
}

console.dir(object);
