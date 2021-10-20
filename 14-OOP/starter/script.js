'use strict';
//////////////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create fucntion in constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

/*
What happens when constructor function is called
1. new empty object {} is created
2. function is called, this = {}
3. {} linked to prototype (create __proto__ property)
4. function automatically return {}
*/

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // -> true

//////////////////////////////////////////////
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__); // that shows prototype of jonas
console.log(jonas.__proto__ === Person.prototype); // -> true
console.log(Person.prototype.isPrototypeOf(jonas)); // -> true
console.log(Person.prototype.isPrototypeOf(Person)); // -> false

// .__proto__ = .prototypeOfLinkedObjects
// Person.prototype itself is an object that has a prototype

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // -> true
console.log(jonas.hasOwnProperty('species')); // -> false

// understanding of prototype chain
console.log(jonas.__proto__); // Person.prototype
console.log(jonas.__proto__.__proto__); // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null

// take a look at array's prototype
const arr = [3, 6, 9, 12, 15, 18, 9, 3]; // new Array = []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // -> true
console.log(arr.__proto__.__proto__); // Object.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
