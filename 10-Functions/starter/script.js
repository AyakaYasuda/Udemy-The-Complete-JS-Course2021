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
  return value => value + value * rate;
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again.');
};
/* 
IIFE #1 function declaration
*/
(function () {
  console.log('This will never run again.');
})();
/* 
IIFE #2 arrow function
*/
(() => console.log('This will never run again.'))();

// Closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// closure example #1
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewArray() {
    const inputNum = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n '
        )} \n (Write option number)`
      )
    );
    inputNum < this.options.length && this.answers[inputNum]++;
    this.displayResults('string');
    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewArray.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
const desplayTest = poll.displayResults.bind({ answers: [1, 5, 3, 9, 6, 1] });
desplayTest('array');
