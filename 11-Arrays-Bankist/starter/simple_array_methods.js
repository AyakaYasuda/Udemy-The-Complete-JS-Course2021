'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

/*
SLICE method
*/
// create a new array ['c', 'd', 'e']
console.log(arr.slice(2));
// create a new array ['c', 'd']
console.log(arr.slice(2, 4));
// create a new array ['d', 'e']
console.log(arr.slice(-2));
// create the same array
console.log(arr.slice());

/*
SPLICE method
*/
// mutate an original array (['a', 'b']) and create a new array ['c', 'd', 'e']
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

/*
REVERSE method
*/
// mutate an original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2.reverse());
console.log(arr2);

/*
CONCAT method
*/
const letters = arr.concat(arr2);
console.log(letters);

/*
JOIN method
*/
console.log(letters.join())
console.log(letters.join(''))
console.log(letters.join('-'))