1. Create object "post" which should contain
title
body
author
views
comment which contain information about the authot first and last name and comment body
isLive
someFunction: result of calling console.log()

const post = {

}

then get comment body and someFunction values using dots and bracket notation

1.1 get the length of post object and  write the script which should return the list the properties values of a Post object


2. Write the function called "helloColleagues" which should accept two parameter "company" and "team" and shoud return the string with 'I am working in "company" in amazing "team"';

2.1) 
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


2.2) Write the function that takes two numbers and returns the maximum of two

function maxNumber(a, b) {
  // your code
}

maxNumber(1, 2) // 2

3)
We have an object storing salaries of our team:

let salaries = {
  Mykola: 250,
  Pavlo: 250,
  Petro: 500
}
Write the function to sum all salaries and return it. Should be 1000 in the example above.

If salaries is empty, then the result must be 0.

3.1)
We have an object storing salaries of our team:

let salaries = {
  Mykola: 250,
  Pavlo: 250,
  Petro: 500
}
Write the function that returns name and value of employer that gets biggest salary


4)
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.


5) Show stars
function showStars(rows) {
    for (let row = 1; row < rows; rows++ ){
      let star = *;
      for()
    }
}

showStars(4) // * ** *** ****
