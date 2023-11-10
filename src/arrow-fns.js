// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.


const giveMeTwo = () => {
    return 2
  };
  
  giveMeTwo();


// Ex.:
//   giveMeTwo();
//   => 2
// const giveMeTwo = undefined;

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.

const addNums = (num1, num2) => {
    return num1 + num2
  };
  
  addNums(2, 2);



//   addNums(1, 2);
//   => 3
// const addNums = undefined;



// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.

const max = (num1, num2) => {
    return (num1 >= num2 ? num1 : num2)
};

max(2, 3);


//   max(1, 2);
//   => 2
// const max = undefined;
// Note: you can also do this on one line:
// const max = (a, b) => (a >= b ? a : b);



// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.


const nums = [1, 2, 3, 4, 5];

const evens = nums.filter(
  function(nums) {
      (nums % 2 === 0);
      return (nums.filter)
  }
);

// return (evens);


//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
// function evens(nums) {}



// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.

// let names = ['Clive', 'Jill', 'Torgal'];

// names.forEach(
//     function ()
//     (`Hello, ${names[i]}!`);
// )
    

//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
function createGreetings(names) {}

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.





//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
function loudLongWords(words) {}

export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };
