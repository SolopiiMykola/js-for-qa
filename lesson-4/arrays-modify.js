// ***************************************************************************
// Other array methods

// ***************************************************************************
// splice

// arr.splice(index[, deleteCount, elem1, ..., elemN])
// starts from the position index:
// removes deleteCount elements
// and then inserts elem1, ..., elemN at their place.
// Returns the array of removed elements.

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"]
let res =  arr.splice(1, 1); // study
// splice modify your array

// **
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
console.log(arr); // now ["Let's", "dance", "right", "now"]

// **
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice(0, 2);
console.log(removed); // "I", "study"
console.log(arr); // splice modify arr

// **
let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0 elements
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
console.log(arr); // "I", "study", "complex", "language", "JavaScript"

// ***************************************************************************
// slice
// Returns a new array containing all items from index "start" to "end"
// Slice don't modify your array. Return new array as a result
let arr = ["a", "b", "c", "d"];
console.log(arr.slice(1, 3)); // [b,c]
console.log(arr.slice(-2)); // [c,d]
console.log(arr);

// ***************************************************************************
// concat
// Merges 2 arrays

let arr = [1, 2];

// merge arr with [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// merge arr with [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// merge arr with [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

let arr = [1, 1, 1] + [1]; // ? work different
console.log(arr); //1,1,11

// ***************************************************************************
// sort

let arr = [1, 3, 2, 15];
// the method reorders the content of arr (and returns it)
// modify your array
arr.sort();
console.log(arr); // 1, 15, 2, 3

// UNSAFE!
// Why it is sorted to - 1, 15, 2 ??????
// The items are sorted as strings by default.
console.log("2" > "15"); // true

// To avoid this - supply your own sorting function:

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [1, 2, 15];
arr.sort(compareNumeric);
console.log(arr); // 1, 2, 15

// comparison function should return a positive number to say “greater”
// and a negative number to say “less”.
// 0 - "same"
// So you can write the same:
arr.sort((a, b) => a - b);

// ***************************************************************************
// reverse

let arr = [1, 14, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // 5,4,3,2,1

// ***************************************************************************
// split and join

// split can be used to split string to array:
let names = 'one, two, three';
let arr = names.split(', ');
console.log(arr) // [ 'one' 'two' 'three' ] 


// join - will join array items to string:
let arr = [1, 14, 2, 3, 4, 5];
let str = arr.join(';');
console.log(str);

console.log(typeof str);

