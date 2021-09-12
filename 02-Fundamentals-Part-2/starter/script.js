"use strict";
// LECTURE: Functions
// e.g.
function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(3, 3);
console.log(appleOrangeJuice);
//
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descFinland);
const descGermany = describeCountry("Germany", 83, "Berlin");
console.log(descGermany);
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
console.log(descPortugal);

// LECTURE: Function Declarations vs. Expressions
// ----- Function Declarations -----
function percentageOfWorld1(population) {
  return (population / 7900) * 100 + "%";
}
console.log(percentageOfWorld1(100));

const percentageFinland1 = percentageOfWorld1(6);
const percentageChina1 = percentageOfWorld1(1441);
const percentageUSA1 = percentageOfWorld1(332);
console.log(percentageFinland1, percentageChina1, percentageUSA1);

// ----- Function Expressions -----
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100 + "%";
};

// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100 + "%";
console.log("China", percentageOfWorld3(1441));

// LECTURE: Functions Calling Other Functions
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  console.log(
    `${country} has ${population} million people, which is about ${percentage} of the world.`
  );
};
describePopulation("Finland", 6);
describePopulation("China", 1441);
describePopulation("USA", 332);

// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

const firstScoreDolphins = calcAverage(44, 23, 71);
const firstScoreKoalas = calcAverage(65, 54, 49);
console.log(firstScoreDolphins, firstScoreKoalas);
const secondScoreDolphins = calcAverage(85, 54, 41);
const secondScoreKoalas = calcAverage(23, 34, 27);
console.log(secondScoreDolphins, secondScoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolhins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(firstScoreDolphins, firstScoreKoalas);
checkWinner(secondScoreDolphins, secondScoreKoalas);

// LECTURE: Introduction of Arrays
/*
const populations = [6, 83, 10, 1441];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
*/

// LECTURE: Basic Array Operations (Methods)
const neighbours = ["Norway", "Sweden", "Russia"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Garmany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

// Coding Challenge #3
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉

GOOD LUCK 😀
*/

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));
// create bills array
const bills = [125, 555, 44];
console.log(bills);
// create tips array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// create total array
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// LECTURE: Introduction to Objects
/*
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
};

// LECTURE: Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
*/

// LECTURE: Object Methods
// e.g.
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
//
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    console.log(this.isIsland);
  },
};
myCountry.describe();
myCountry.checkIsland();

// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

// console.log(
//   john.BMI > mark.BMI
//     ? `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullname}'s BMI (${mark.BMI})`
//     : `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullname}'s BMI (${john.BMI})`
// );

if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullname}'s BMI (${mark.BMI})`
  );
} else if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullname}'s BMI (${john.BMI})`
  );
}

// LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is curently voting.`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
const populations = [6, 83, 10, 1441];

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}

// LECTURE: The While Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);

// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! 

Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const newTips = [];
const newTotals = [];

for (let i = 0; i < newBills.length; i++) {
  const newTip = calcTip(newBills[i]);
  newTips.push(newTip);
  const newTotal = newBills[i] + newTips[i];
  newTotals.push(newTotal);
}
console.log(newBills, newTips, newTotals);

//Bonus
const newCalcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // console.log(sum)
  return sum / arr.length;
};
console.log(newCalcAverage([2,5,8]));
console.log(newCalcAverage(newTotals));

