// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/

/*
1) Understanding the problem
    - Array transformed to strings, separated by ...
    - What is x days ? Answer: index + 1
2) Breaking it up into sub-problems
    - how to add ... between elements and at the end of the element
    - how to transfor array to string
    - string needs to contain day (index + 1)
*/

const printForecast = function (arr) {
    let forecast = '';
    for (let i = 0; i < arr.length; i++) {
        forecast += `... ${arr[i]}ºC in ${i + 1} days`;
    }
    forecast += `...`;
    console.log(forecast);
};
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);

