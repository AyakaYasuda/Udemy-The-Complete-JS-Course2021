'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> snowball
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
// 0 in here is the initial value
console.log(balance);

const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArrow);

// in case of using 'for'
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// figure out the maximum value by using reduce method 
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
