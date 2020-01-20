'use strict';

const fs = require('fs');

const wrapAsync = fn => (...args) => setTimeout(() => fn(...args),
  Math.floor(Math.random() * 5000));

const sleep = time => {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, time)
  });
  return promise;
};

const aFunc = par => {
	return new Promise((resolve, reject) => {
	  if (!par) reject('No argument given!');
	  setTimeout(() => resolve(par ** 2), 3000);	
	}).then(console.log);
};

const asyncRead = file => {
	return new Promise((resolve, reject) => {
	  fs.readFile(file, 'utf-8', (err, data) => resolve(data.length));	
	});
};

(async () => {



})();

const Func = async name => {
  await sleep(3000);
  return name;
};

const asyncFunc = wrapAsync(Func);
asyncFunc();

(async () => {

  console.log(aFunc(4));
  console.log(aFunc(6));
  console.log(await asyncRead('async.js'));
	console.time('1');
  const data = await Func('async.js');
  console.log(data);
  console.timeEnd('1');

})();