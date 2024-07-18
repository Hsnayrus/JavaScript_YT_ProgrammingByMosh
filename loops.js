// Setting up prompt for it to work with node
const prompt = require("prompt-sync")({ sigint: true });

// Function to get the number of even and odd numbers within a range using for loop using For loop
const useForLoop = () => {
  let startNum = prompt("Enter a starting number: ");
  startNum = Number(startNum);

  let endNumber = prompt("Enter your end number, inclusive: ");
  endNumber = Number(endNumber);

  if (endNumber > startNum) {
    const evenNums = [];
    const oddNums = [];
    for (let i = startNum; i <= endNumber; i++) {
      if (i % 2 == 0) {
        evenNums.push(i);
      } else {
        oddNums.push(i);
      }
    }

    function printNumberArray(array, isEven) {
      console.log("\n" + isEven ? "Even" : "Odd", "numbers: ");
      console.log(array);
      console.log("Length:", array.length, "\n");
    }
    console.log(`Between ${startNum} and ${endNumber}: `);
    printNumberArray(evenNums, true);
    printNumberArray(oddNums, false);
  } else {
    console.log("End number cannot be smaller than the start number.");
  }
};

// Function to get an object's key-value pairs using for-in loop
const useForInLoop = () => {
  const person = {
    firstName: "Suryansh",
    lastName: "Jain",
    email: "email@email.com",
    age: 24,
  };
  for (let key in person) {
    console.log(`The person's ${key} is: ${person[key]}`);
  }
};

// Function to test For-Of loop
const useForOfLoop = () => {
  const myStr = "JavaScript is awesome";
  for (let char of myStr) {
    console.log(char);
  }
};

// Code snippet to get all prime numbers from 1 to that number, inclusive, using while loop
const useWhileLoop = () => {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
  const primeNums = [];
  let endRangeNum = prompt(
    "Enter a number upto(and inclusive) which you want to know all the primes: "
  );
  endRangeNum = Number(endRangeNum);
  let i = 1;
  while (i <= endRangeNum) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
    i++;
  }
  console.log(primeNums);
};

const useDoWhileLoop = () => {
  let randomNum = Math.floor(Math.random() * 100);
  console.log(
    "Welcome to our game. I will generate a number between 1 and 100 and you have to guess what that number is. You get unlimited tries.\n"
  );
  let userNum;
  do {
    userNum = prompt("Enter your guess: ");
    userNum = Number(userNum);
  } while (userNum != randomNum);
  console.log("Congratulations!");
};

// useForLoop();
// useForInLoop();
// useForOfLoop();
// useWhileLoop();
useDoWhileLoop();
