/* Exercise 1
 Write a function which should retur sum of all numbers inside array
 */

const numbers = [1, -1, 2, 3];

function sum(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sum(numbers));

// Also we can reduce all the values inside array inside single number
numbers.reduce((accumulator, currentValue) => {
    // accumulator the same as our "let sum = 0;"
    // currentValue will iterate throught all elements in array, 
    // so on each call we want to get the current value and add it to the accumulator
    return accumulator + currentValue; // reduce with get the result and store it in accumulator
}, 0) // initial value for accumulator

// first call
// a = 0, c = 1, a + c = 1;
// second call
// a = 1, c = -1, a + c = 0;
// third call
// a = 0, c = 2, a + c = 2;
// fourth call
// a = 2, c = 3, a + c = 5;
const sum = numbers.reduce((accumulator, currentValue) => {
    // accumulator the same as our "let sum = 0;"
    // currentValue will iterate throught all elements in array, 
    // so on each call we want to get the current value and add it to the accumulator
    return accumulator + currentValue; // reduce with get the result and store it in accumulator
}, 0) // initial value for accumulator

console.log(sum);

const numbers = [1, -1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

/* Exercise 2
 When you run arrayFromRange function should dispayd numbers from min to max 
 Also this function should accept negative numbers
 */
function arrayFromRange(min, max) {
    let result = []
    for (i = min; i <= max; i++) {
        result.push(i)
    }
        return result
}

function arrayFromRange(min, max) {
    let resultArray = [];
    for (let i = min; min <= max; min++) {
        resultArray.unshift(min);
    };
    return resultArray.sort((a, b) => a - b);
};

const numbers = arrayFromRange(1, 4);

console.log(numbers); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // Should display [-10, -9, -8]

/* Exercise 3
Need to create function which display the max number from the array
*/
const numbers = [1, 2, 3, 4, 5];

const maxNumber = getMax(numbers);

console.log(maxNumber) // should display max nuber from the array

function getMax(items) {
    let max = items[0]
    for (i = 0; i < items.length; i++) {
        if (items[i] > max) {
            max = items[i]
        }
    }
    return max
}

function getMax(array) {
    return array.reduce((a, b) => a > b ? a : b);
};

/* Exercise 4
Ruturn all movies in 2019 with rating > 4
Sort them by their rating in descending order
Pick their title 'a', 'b' ...
So, the result should be ["a", "c"] 
*/

let movies = [
    { title: 'a', year: 2019, rating: 4.7 },
    { title: 'b', year: 2018, rating: 4.4 },
    { title: 'c', year: 2019, rating: 4.3 },
    { title: 'f', year: 2019, rating: 3.9 },
]

let moviesWith4Rating2019 = movies
    .filter(item => item.year === 2019 && item.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .map(item => item.title);
console.log(moviesWith4Rating2019);
