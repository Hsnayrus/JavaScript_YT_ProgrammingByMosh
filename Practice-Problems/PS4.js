const prompt = require("prompt-sync")({ sigint: true });

// What will the following line print in JS:
console.log('har"'.length); // 4

// Explore the includes, startsWith and endsWith methods of a String
let myStr = "Hello World";
console.log(myStr.includes("Hello World"));
console.log(myStr.startsWith("H"));
console.log(myStr.endsWith(" "));

// Write a program to convert a given string to lowercase
let userString = prompt("Enter a string to convert to lowercase: ");
console.log(`Your lowercased string is: ${userString.toLowerCase()}`);

// Extract the amount out of this string: "Please give $1000"
const anotherString = "Please give $1000";
const myPattern = /(?<amount>[0-9]+)/;
console.log(anotherString.match(myPattern).groups.amount);

// Try to change the 4th character of a string. Were you able to do it?
myStr[3] = "4";
