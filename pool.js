'use strict';

const poolified = Symbol('Poolified');
const factorify = Category => (...args) => new Category(...args);
const fill = (factory, size) => new Array(size).fill(null).map(() => {
  const instance = factory();
  return Object.assign(instance, {[poolified]: true});
});

const poolify = (factory, min, norm, max) => {
  let items = fill(factory, norm);
  let alloc = norm;

  return item => {
    if (item && item[poolified]) {
      const c = items.length;
      items.push(item);
      console.log(`${c}-->${items.length} Return item to pool: ${item}`);
      return;
    }
    if (items.length > 0) {
      console.log(`${items.length}-->${items.length - 1} Remove item from pool.`)
      const element = items.pop();
      if ((items.length < min || items.length === 0) && alloc < max) {
        const c = items.length;
        items = fill(factory, min);
        alloc++;
        console.log(`${c}-->${items.length} Push to items to maintain min value`)
      } 
      return element;
    }
    else {
      console.log('Out of elements! ' + alloc);
    }
  }
}

const Person = function(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person = () => new Person('Vova', 17, 'Kiev');
const pool = poolify(person, 3, 5, 7);
for (let i = 0; i < 7; i++) {
  const a = pool();
  pool(a);  
}






