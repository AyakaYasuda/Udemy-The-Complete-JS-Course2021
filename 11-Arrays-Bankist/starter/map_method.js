'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// const movementsUSD = movements.map(function(mov) {
//     return mov * euroToUSD;
// });
const movementsUSD = movements.map(mov => mov * euroToUSD);
console.log(movements);
console.log(movementsUSD);

// in case of using 'for'
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUSD);
console.log(movementsUSDfor);

const movementsDesc = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDesc);
