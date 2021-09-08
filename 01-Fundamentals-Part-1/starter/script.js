// LECTURE: Values and Valuables
let country = 'Japan';
let continent = 'East Asia';
let population = 126.3;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = 'Japanese';
// const country = 'Japan';
// const continent = 'East Asia';
// const isIsland = true;
// isIsland = false;

// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
console.log(BMIMark);
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log(BMIMark,BMIJohn,markHigherBMI);

// LECTURE: Strings and Template Literals
discription =  `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// LECTURE: Taking Dicisions: if/else Statement
const avePopulation = 33;
// population = 13;
population = 130;
if (population > avePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${avePopulation - population} million below average`);
}

// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's ${BMIJohn}`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's ${BMIMark}`);
}

// LECTURE: Type Convertion and Coercion
console.log('9' - '5');  // 4
console.log('19' - '13' + '17');  // 617
console.log('19' - '13' + 17);  // 23
console.log('123' < 57);  // False
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?')
);

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}

// LECTURE: Logical Operators
