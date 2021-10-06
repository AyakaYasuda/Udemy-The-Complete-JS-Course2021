'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const x = new Array(7);
console.log(x); // --> empty array

// fill method
x.fill(1, 3, 5); // (element, SP, FP)
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const arrayOfOne = Array.from({ length: 7 }, () => 1);
console.log(arrayOfOne);
// create arr [1,2,3,4,5,6,7,8] by using Array.from
const arr2 = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(arr2);
