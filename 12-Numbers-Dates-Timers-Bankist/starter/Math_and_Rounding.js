'use strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 20, 83, 103, 45, 2));
console.log(Math.max(5, 20, 83, '103', 45, 2));
console.log(Math.max(5, 20, 83, '103px', 45, 2));

console.log(Math.min(5, 20, 83, 103, 45, 2));

// calcurate the area
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// the way to give you a random number
console.log(Math.trunc(Math.random() * 6)); // never reach 6

// a function to give you a random number between min and max
const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3)); // -> 23
console.log(Math.round(23.7)); // -> 24

console.log(Math.ceil(23.3)); // -> 24
console.log(Math.ceil(23.7)); // -> 24

console.log(Math.floor(23.3)); // -> 23
console.log(Math.floor(23.7)); // -> 23

console.log(Math.trunc(23.3)); // -> 23 remove any decimal part

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
console.log((2.7).toFixed(0)); // toFixed returns suring 
console.log((2.7).toFixed(3)); // 3 decimal places 
console.log((2.333).toFixed(2));  // 2 decimal places
console.log(+(2.333).toFixed(2));  // turn into number