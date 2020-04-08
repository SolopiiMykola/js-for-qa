// create array which contain array of object, function with some console.log, boolean, string, and undefined 
// and try to get value of function by index



// Exercise 1
// Write a function which should return sum of all numbers inside array
const numbers = [1, -1, 2, 3];

function sum(numbers) {
 // numbers
}

console.log(sum(numbers)); // 5

// Exercise 2
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers
function arrayFromRange(min, max) {
    // your code
}

const numbers = arrayFromRange(1, 4);

console.log(numbers); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // Should display [-10, -9, -8]


// Exercise 3
// Need to create function which display the max number from the array
const numbers = [1, 2, 3, 4, 5];

const maxNumber = getMax(numbers);

console.log(maxNumber()) // should display max number from the array 5

function getMax([]) {
    // your code
}


// Exercise 4

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
]

// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] 
