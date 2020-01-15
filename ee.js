'use strict';

const ee = () => {
  const events = new Map();
  const emitter = {
    on: (name, func) => {
      if (events.has(name)) {
        const mass = events.get(name);
        mass.push(func);
      } else {
        const mass = [];
        mass.push(func);
        events.set(name, mass)
      }
    },
    emit: name => {
      if (!events.has(name)) {
        console.log('No entry for ' + name);
        return;}
      const mass = events.get(name);
      for (const fn of mass) fn();
    },
  }
  return emitter;
}
const sayHi = () => console.log('Hello World!');
const sayBye = () => console.log('Goodbye World!');

const emitter = ee();
emitter.on('123', sayHi);
emitter.on('123', sayBye);
emitter.on('123', sayHi);

emitter.emit('123');
