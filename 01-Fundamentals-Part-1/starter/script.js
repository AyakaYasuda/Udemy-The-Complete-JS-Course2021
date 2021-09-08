// LECTURE: Values and Valuables
let country = 'Canada';
let continent = 'North America';
let population = 13;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = 'Chinese';
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
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const firstScoreDolphins = 96;
const secondScoreDolphins = 108;
const thirdScoreDolphins = 89;

const firstScoreKoalas = 88;
const secondScoreKoalas = 91;
const thirdScoreKoalas = 110;

// 1. //
const aveDolphins = (firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / 3;
const aveKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;
console.log(aveDolphins, aveKoalas);
// 2. //
if (aveDolphins > aveKoalas) {
    console.log('Dolfins win the trophy 🏆');
} else if (aveDolphins === aveKoalas) {
    console.log('DRAW');    
} else if (aveKoalas > aveDolphins) {
    console.log('Koalas win the trophy 🏆');
}
// 3. & 4. //
if (aveDolphins > aveKoalas && aveDolphins >= 100) {
    console.log('Dolfins win the trophy 🏆');
} else if (aveDolphins === aveKoalas && aveDolphins >= 100 && aveKoalas >= 100) {
    console.log('Both team win the trophy 🏆');    
} else if (aveKoalas > aveDolphins && aveKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else {
    console.log('No team wins the trophy...')
}

// LECTURE: The Switch Statement
switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// LECTURE: The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275
// const bill = 40
const bill = 430
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);