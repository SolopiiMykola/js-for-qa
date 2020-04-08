// Searching i array
// indexOf
// lastIndexOf
// includes
// find
// findIndex
// some
// every
// filter
let fruits = ["Apple", "Orange", "Plum", 1];
// looks for item starting from index from, and returns the index where it was found, otherwise -1.
let index = fruits.indexOf("Plum", 1); // 2
let index = fruits.indexOf("Plumjvjhb");
let index = fruits.indexOf(1); // -1

// same, but looks from right to left.
let fruits = ["Apple", "Orange", "Plum", "Apple", 1];
let index = fruits.lastIndexOf("Plum");
let index = fruits.lastIndexOf("Apple");


// includes returns true if found.
console.log(fruits.indexOf('Apple' !== 1)) // but it is agly
let isExist = fruits.includes("Orange"); // includes works only for prymitive types
console.log(isExist); // true

// Note that the methods use === comparison

// ***************************************************************************
// find and findIndex
// Returns first item for which function returned 'true', or undefined
let users = [
    { id: 1, name: "John", age: 21 },
    { id: 2, name: "Pete", age: 43 },
    { id: 3, name: "Mary", age: 37 }
];

let user = users.find(function(item) { // functhion inside mothod call callback function
    return item.id == 1;
});

// you can also use arrow function
let user = users.find(item => item.id == 1);

console.log(user.name); // John

// findIndex works the same but returns index of element, or -1 if not found
let ind = users.findIndex(function(item) {
    return item.id == 2;
});

console.log(ind); // 1

// some - to check if atleast one element in array matches condition
// return true
let hasUserLessThan18 = users.some(function(user) {
    return user.age < 18;
});

console.log(hasUserLessThan18); // false

// every - to check that ALL elements in array matches condition
let allUsersMoreThan18 = users.every(function(user) {
    return user.age > 18;
});

console.log(allUsersMoreThan18); // true

// ***************************************************************************
// filter
let users = [
    { id: 1, name: "John", age: 43 }, // same age
    { id: 2, name: "Pete", age: 43 },
    { id: 3, name: "Mary", age: 37 }
];

// returns new array that will contain only items for which function returned 'true'
let usersWithAge43 = users.filter(function(item) {
    return item.age == 43
});

console.log(usersWithAge43.length); // 2
console.log(usersWithAge43) 
/*
[ { id: 1, name: 'John', age: 43 }, 
  { id: 2, name: 'Pete', age: 43 } ] 
*/
// filter does not modify old array