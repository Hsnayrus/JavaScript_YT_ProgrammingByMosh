// Create a variable of type string and try to add a number to it
let myStr = "Chutiya";
myStr += 2;
console.log(myStr); // Should be "Chutiya2"

// Use typeof operator to find the type of the variable from the question above
console.log(typeof myStr); // Should be String

// Create a const type object in JS. Can it be changed to hold a number later?
const person = {
  name: "Suryansh Jain",
  age: 24,
};
// person = 5; // Shouldn't be able to

// Try adding a new key to the const object from the problem above
person["email"] = "email@email.email"; // Shouldn't be able to
console.log(person);

// Write a JS Program to create a word-meaning dictionary of 5 words
let myDict = {
  hi: "A greeting",
  keyboard:
    "An electronic device which is used to input characters into a computer",
  mouse: "An electronic device which is used to navigate a computer",
  iPad: "a trap",
  bitches: "aint shit but hoes and tricks",
};
