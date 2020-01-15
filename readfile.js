'use strict';

const fs = require('fs');

const data = '';
const print = (err, data) => {
  if (!err) console.log(data);
  console.log('error');
}
//end prints first

fs.readFile('./test.txt', 'utf-8', print);
console.log('end');
