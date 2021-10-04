'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov) {
    return mov > 0; // true
})
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals);

// in case of using 'for'
const depositesFor = [];
for(const mov of movements) {
    if (mov > 0) depositesFor.push(mov);
}
console.log(depositesFor);