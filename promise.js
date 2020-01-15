'use strict';

const sleep = msec => {
	const end = new Date().getTime() + msec;
	while (new Date().getTime() < end);
}

const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('resolved! '), 3000);
});


promise
.then((text) => console.log(text + new Date().toISOString()))
.catch((error) => console.log('something happened!'));

console.log('start ' + new Date().toISOString());

