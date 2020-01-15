'use strict';

const Person = function(name, city) {
  this.name = name;
  this.city = city;
}

const vova = new Person('Vladimir', 'Kiev');
console.dir({ vova });