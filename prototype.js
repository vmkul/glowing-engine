'use strict';

const Person = function(person) {
  this.name = person.name;
  this.phone = person.phone;
}

Person.prototype.toString = function() {
  console.log(this.name+'\n'+this.phone);
}

Person.from = function(object) {
  return new Person({name: object.name, phone: object.phone});
}


const obj = {name: 'Vladimir', phone: '0976827265'};

const programmer = new Person(obj);
programmer.toString();

const marcus = Person.from({name: 'Marcus', phone: 'none'});
marcus.toString();
