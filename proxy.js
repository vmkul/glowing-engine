'use strict';

const object = {
  name: 'Vova',
  age: 17,
  city: 'Kiev',
}

const proxy = new Proxy(object, {
  get: (obj, key) => obj[key] ? obj[key] : 'Unknown key',
  set: (obj, key, value) => {
    console.log(`Setting field ${key} to ${value}`);
    obj[key] = value;
    return true;
  },
})

proxy.name = 'Geralt';
proxy.born = new Date().getFullYear() - proxy.age;
console.log(proxy);
