// Arrays
// Arry works similar to object
// with the array you can modify your data in any way
// An array just another kind of object with Numbers used as keys.
// Array is an object and thus behaves like an object (copy by reference, properties …)

let arr = new Array();
let arr = []; // mostly used

// Arrays is a object which describe some sequance of elements with strict order
// Declare array with some initial data:

// GET element from array - use index
const fruits = ["Apple", "Orange", "Plum"];

// Index is a number starts from 0
//  --0--     --1--     --2--
// ["Apple", "Orange", "Plum"]

let apple = fruits[0]; // Apple
let orange = fruits[1]; // Orange
let plum = fruits[2]; // Plum

// UPDATE elements in array - use index
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

// ADD new element to array - use index it is a simple way
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

// Arrays can contain ANY types inside, even mix of many types:
let arr = [
    "Apple",
    { name: "Karl" },
    true,
    function() {
        alert("hello");
    }
];

// get the object at index 1 and then show its name
let n = arr[1]; //{name: "Karl"}
console.log(n.name)  // Karl
// get the function at index 3 and run it
arr[3](); // hello

// use isArray to check if your variable is array:
let arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); // true

// ***************************************************************************
// pop/push - work with the end of array, shift/unshift - work with the start of array

// pop - take away last element
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.pop()); // remove "Pear" and print it
console.log(fruits); // Apple, Orange

// push - add element to the end of array
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear

// shift - take away first element
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.shift()); // remove Apple and print it
console.log(fruits); // Orange, Pear

// unshift - add element to begining
let fruits = ["Orange", "Pear"];
fruits.unshift("Apple");
console.log(fruits); // Apple, Orange, Pear

// You can add multiple elements at once
let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits);

// ***************************************************************************
// Arrays are Objects:

let fruits = []; // make an array
fruits[100] = 5; // assign a property with the index far greater than its length
fruits.age = 25;  // create a property with an arbitrary name
console.log(fruits[100]) // 5

// Special property - length
// Represents number of items in array:
let fruits = [];
console.log(fruits.length); // 0, length return number
fruits.push("a", "b", "c");
console.log(fruits.length); // 3

// Do not be confused with length\index!
console.log(fruits[2]); // "c"
console.log(fruits[fruits.length] - 1); // 'c'

// UNSAFE!
// You can modify value of length:
let fruits = [];
console.log(fruits.length); // 0
fruits.push("a", "b", "c");
console.log(fruits.length); // 3
fruits.length = 100;
console.log(fruits.length); // 100
fruits.push("d");
console.log(fruits.length); // 101

// ***************************************************************************
// Iterating (loops) for array

let fruits = ["Apple", "Orange", "Pear"];

// (1) Just regular 'for' loop with checking length
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// (2) for/of - special form for iterables(arrays)
let fruits = ["Apple", "Orange", "Plum"];
// for..of doesn’t give access to the index of the current element
// variable name is not a strict
for (let fruit of fruits) {
    console.log(fruit);
}

// (!) Do NOT use for/in loop (as for iterating over object properties)
let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
    console.log(arr[key]); // Apple, Orange, Pear
}
// because for..in iterates over ALL properties, not just indexes
arr["some"] = "oops!";
console.log(arr);
for (let key in arr) {
    console.log(arr[key]); // Apple, Orange, Pear, oops!, not {some: "oops"}
}

// (3) forEach method, runs provided function for every member of array
let arr = ["Apple", "Orange", "Pear"];
arr.forEach(function(item, index, array) {
    console.log(item);
}); // Provide example with arrow funtion
// The result of the function (if it returns any) is thrown away and ignored.
let res = arr.forEach(function(item, index, array) {
    return "NEW" + item;
});
console.log(arr) // 
console.log(res) // ["Apple", "Orange", "Pear"]

// (4) .map() method
let arr = [10, 30, 100];
let newArr = arr.map(function(item, index, array) {
    console.log(item);
    return item + 10;
});
console.log(arr); // [10, 30, 100]
console.log(newArr);
// The result of the function will be passed to new array
