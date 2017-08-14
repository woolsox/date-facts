const chalk = require('chalk');
var moment = require('moment');

// straight forward console logging

console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");
console.log("It is the " + chalk.magenta(moment().format("DDDo")) + " day of the year.");

// how to figure out the seconds passed for today

let today = moment();
let startOfToday = today.clone().startOf('day');
let secondsPassed = today.diff(startOfToday, 'seconds');

console.log("It is " + chalk.cyan(secondsPassed) + " seconds into the day.");

// how to figure out if it's day light savings time or not

let dlst = moment().isDST();

if (dlst) {
 dlst = "is"
} else {
 dlst = "is not"
}

console.log("It " + chalk.green(dlst) + " during Daylight Savings Time.");

// how to figure out if it it's leap year

let leapYear = moment().isLeapYear();

if (leapYear) {
 leapYear = "is"
} else {
 leapYear = "is not"
}

console.log("It " + chalk.red(leapYear) + " a leap year.");
