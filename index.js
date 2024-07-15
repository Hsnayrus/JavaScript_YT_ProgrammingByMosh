// Person Object which holds details about a person

let person = {
  firstName: "Suryansh",
  lastName: "Jain",
  age: 24,
  email: "myEmail@email.com",
};

console.log(person);
// Accessing the object's properties using dot notation
console.log(
  "My name is: " +
    person.firstName +
    " " +
    person.lastName +
    ", and I am " +
    person.age +
    " years old!" +
    " You can contact me at my email: " +
    person.email +
    "."
);

const fNameProperty = "firstName";
console.log(person.firstName);
console.log(person[fNameProperty]);
