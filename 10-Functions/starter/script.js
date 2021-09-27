'use strict';

// default parameters
const bookings = [];

const createBooking = function (
  frightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 way to set the default
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    frightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

// how passing arguments works
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

// const CheckIn = function (flightNum, passenger) {
//   flightNum = 'LH889';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Successfully Checked In!');
//   } else {
//     alert('Wrong Passport...');
//   }
// };

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
// CheckIn(flight, jonas);
console.log(flight);
console.log(jonas);

// how higher-oeder functions works
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', oneWord);
transformer('JavaScript is the best', upperFirstWord);

// an example where JS uses callback functions a lot
const highFive = function () {
  // console.log('👋');
};
document.body.addEventListener('click', highFive);

// functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}!`);
//   };
// };
const greet = greeting => name => console.log(`${greeting}, ${name}!`);

const greeterHey = greet('Hey');
// In here, greeterHey is equal to the function returned in the greet function
greeterHey('Jonas');
// The other way to call a function that has a returning function
greet('Hello')('Alissa');

const lufthansa = {
  airline: 'Lufthanza',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Alissa Lane');
lufthansa.book(818, 'Ayaka Yasuda');
console.log(lufthansa);

// want to reuse the book method in eurowings obj as well
// However, 'this' still points lufthansa obj.
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
/*
solution #1 - use call method and define 'this' as a parameter
*/
const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 818, 'Emily Cooper');
/*
solution #2 - use call method and pass an array
*/
const flightData = [23, 'Antoni Porker'];
book.apply(eurowings, flightData);
// book.call(eurowings, ...flightData); // the same way to above
/*
solution #3 - use bind method where function is not called, but 'this' is re-defined
*/
const bookEW = book.bind(eurowings);
bookEW(23, 'Steve Hanson');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Robert Doe');

// an example of using bind method with an event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = rate => {
  return value => value + value * rate
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));