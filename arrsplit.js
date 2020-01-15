'use strict';

const array = [3, 5, 2, 2, 6, 7];

const split = (arr, pos) => {
	const newarr = arr.splice(0, pos);
	return {arr1: newarr, arr2: arr};	
};

console.log(split(array, 3));