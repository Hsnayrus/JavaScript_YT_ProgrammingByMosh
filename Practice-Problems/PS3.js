const prompt = require("prompt-sync")({ sigint: true });

// Write a function to print the marks of a student in an object using for loop marksObj = {surya: 98, rishi: 99: rishita: 99, neha: 0}
const printMarks = (scores) => {
  for (currentScore of scores) {
    console.log(currentMark);
  }
};

// Write a function to achieve the same functionality as the above question, but using a for-in loop
const printMarksForIn = (scores) => {
  for (currentStudent in scores) {
    console.log(`${scores[currentStudent]}`);
  }
};
// Write a function to print Try Again until the user enters the correct number
const guessNumber = () => {
  let number = Math.floor(Math.random()) * 100;
  let userGuess;
  while (true) {
    userGuess = Number(prompt("Guess a number between 1 & 100: "));
    if (userGuess != number) {
      console.log("Try again!!");
    } else {
      break;
    }
  }
};
// guessNumber();
// Write a function to find the mean of 5 numbers
const calculateMean = (numsArray) => {
  let sum = 0;
  for (num of numsArray) {
    sum += num;
  }
  return sum / numsArray.length;
};

console.log("The mean of the numbers is: " + calculateMean([5, 3, 3, 3, 3]));
