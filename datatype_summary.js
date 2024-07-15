// Primitive Data Types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference Data Types:
// Array, Object, Functions

// Trying Primitive data types
const myString = "Hello World!";
const myNum = 1300;
const myBool = true;
const userSelection = null;
const selectedColor = undefined;
const firstSym = Symbol("123");
const secondSym = Symbol("123");
const myBigNum = 348373847312123n;
const person = {
  firstName: "Suryansh",
  lastName: "Jain",
  age: 24,
  email: "myEmail@email.com",
};

// Trying Reference Data Types
const numArray = [1, 2, 3];
const strArray = ["This ", "is ", "my ", "string "];
const myFunc = function () {
  console.log("Printing Hello from the function");
};

const printValueAndType = function (value) {
  console.log("");
  console.log("Value: ", value);
  console.log("Type: ", typeof value);
};

printValueAndType(myString);
printValueAndType(myNum);
printValueAndType(myBool);
printValueAndType(userSelection);
printValueAndType(selectedColor);
printValueAndType(myBigNum);
printValueAndType(numArray);
printValueAndType(strArray);
printValueAndType(myFunc);
/*
This one shows [object Object], because I am trying to append the object to a string. Since the toString() method of the person object is not overrode, it is printing [object Object] instead of it's details.
*/
printValueAndType(person);

// Cannot use the defined function since Symbols have to be converted to a string before that value can be printed
console.log("The value of firstSym: ", firstSym, ", Type: ", typeof firstSym);
console.log(
  "The value of secondSym: ",
  secondSym.valueOf(),
  ", Type: ",
  typeof secondSym
);
