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

Person.hey = function () {
  console.log('Hey there');
};
Person.hey();

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

//////////////////////////////////////////////
// ES6 Classes

// class expression
// const Personcl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    //   else alert(`${name} is not a full name`)
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // -> true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

/*
IMPORTANT NOTE
1. Classes are NOT hoisted
2. Classes are first-class citizens
3. Classes are executed in strict mode
*/

//////////////////////////////////////////////
// Setters and Getters

const walter = new PersonCl('Waler White', 1965);
PersonCl.hey();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // latest behaviors as like a property
account.latest = 50;
console.log(account.movements);

//////////////////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // -> true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

//////////////////////////////////////////////
// Inheritance between classes: Constructor functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // -> true
console.log(mike instanceof Person); // => true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//////////////////////////////////////////////
// Inheritance between classes: ES6 classes

// class PersonCl {
//     constructor(fullName, birthYear) {
//       this.fullName = fullName;
//       this.birthYear = birthYear;
//     }

//     // Instance methods
//     // Methods will be added to .prototype property
//     calcAge() {
//       console.log(2037 - this.birthYear);
//     }

//     greet() {
//       console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//       return 2037 - this.birthYear;
//     }
// }

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this, (course = course);
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I fell more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//////////////////////////////////////////////
// Inheritance between classes: Object.create

// const PersonProto = {
//     calcAge() {
//       console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//       this.firstName = firstName;
//       this.birthYear = birthYear;
//     },
//   };

//   const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//////////////////////////////////////////////
// Another class examples

class Account {
  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1);
