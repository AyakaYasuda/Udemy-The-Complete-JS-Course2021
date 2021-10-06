'use strict';

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat(1)); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrInarrInarr = [
  [1, [2, 3]],
  [4, [5, 6], 7, 8],
];
console.log(arrInarrInarr.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]