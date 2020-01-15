'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
console.log(`Hello, ${process.env.USER}!`);
rl.question('>', data => {
  console.log(data);
  process.exit(0);
});
