'use strict';

const arr1 = [1, 2, 2];
const arr2 = [6, 6];

const settify = a => {
	const array = [];
	a.forEach(val => {
		if (!array.includes(val)) array.push(val);
	})
	return array;
};

const unify = (a, b) => {
	for (const element of a) b.push(element);
	return settify(b);
}

console.log(unify(arr1, arr2));