// Use logical operators to find out whether a person's age lies between 10 and 20
let age = prompt("Please enter your age:");
age = Number.parseInt(age);
if (age >= 10 && age <= 20) {
  console.log("Your age lies between 10 & 20");
} else {
  console.log("Your age doesn't lie between 10 & 20");
}

// Demonstrate the usage of switch case statements in JavaScript
let userColor = prompt("Please enter your favorite color");
switch (userColor.trim().toLowerCase()) {
  case "red":
    console.log("Your favorite color is red");
    break;
  case "green":
    console.log("Your favorite color is green");
    break;
  case "blue":
    console.log("Your favorite color is blue");
    break;
  default:
    console.log("Invalid color provided");
    break;
}
// Write a JavaScript program to find out whether a number is divisible by 2 & 3
if (age % 2 == 0 && age % 3 == 0) {
  console.log("Your age is divisible by 2 & 3");
}

// Write a JavaScript program to find out whether a number is divisible by 2 or 3
if (age % 2 == 0 || age % 3 == 0) {
  console.log("Your age is divisible by 2 or 3");
}

// Print 'You can Drive' or 'You cannot drive' based on the person's age using the ternary operator
console.log(age >= 18 ? "You can drive" : "You cannot drive");
