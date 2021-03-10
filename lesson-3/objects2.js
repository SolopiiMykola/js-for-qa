// Property value shorthand
// In real code we often use existing variables as values for property names.

const name = 'Mykola';
const age = '26';

const user = {
  name: name,
  age: age
};
// If variable and key names are same - you can use:
const user2 = {
  name,
  age
};
console.log("Regular:", user);
console.log("Shortened:", user2);

// You can do any math
const user3 = {
    name: 'Myko' + 'la',
    age: 20 + 20
  };
  console.log("Regular:", user);
  console.log("Shortened:", user2);
  console.log("Math:", user3);

// You can mix together as well
const user3 = {
  name,
  age,
  country: "Ukraine"
};

// Can also use ternary operator
const user3 = {
    name,
    age,
    country: "Ukraine",
    key: someCondition ? true : false
  };

// **************************************************************************************************
// Existence check

// Accessing a non-existing property just returns undefined
const user4 = {
  name: "Ivan"
};
console.log(user4.age); // undefined

// You can use this for good to check if property has value:
console.log(user4.age !== undefined); // false means "no such property"

// BUT there are might be problems when an object property exists, but stores undefined:
let obj = {
  test: undefined
};
console.log(obj.test !== undefined); //  undefined, no property?
console.log("test" in obj); // true, the property does exist!

// undefined is usually not assigned. You should use null for “unknown” or “empty” values.

// **************************************************************************************************
// The “for…in” loop - walk over all keys of an object

let user = {
  name: "Mykola",
  age: 26,
  isAdmin: true
};

// we don't have the same expression as in for loop
// Order of your keys is not alway the same
for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  // we can't use dot notation in for in loop, because we don't know the key of object
  // console.log(user.key);
  console.log(user[key]); // Mykola, 26, true
}

let keys = Object.keys(user);
console.log(keys);
let values = Object.values(user);
console.log(values);


for (let myKey in user) {
  console.log('KEY:', myKey, 'Has value:', user[myKey]); // name, age, isAdmin
}
// **************************************************************************************************
// Copying by reference

// One of the main differences with primitive values, that objects are not copied:
// But primitives are copied
let originalCountry = "Ukraine";
let newCountry = originalCountry;
console.log("before variable update");
console.log(originalCountry);
console.log(newCountry);
originalCountry = "USA";
console.log("after variable update");
console.log(originalCountry);
console.log(newCountry);

const originalObj = {
  country: "Ukraine"
};

const newObj = originalObj; // this will NOT copy object, it will just copy the reference in yout memory
console.log("before update");
console.log(originalObj.country);
console.log(newObj.country);
originalObj.country = "UK";
console.log("after update");
console.log(originalObj.country);
console.log(newObj.country); // country is updated for both variables

// **************************************************************************************************
// equality == and strict equality === operators for objects work exactly the same.

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

let a = {};
let b = {}; // two independent objects
console.log(a == b); // false
console.log(a === b); // false

// **************************************************************************************************
// As you might noticed - const does not prevent objects values to be changed

const user = {
  name: "John"
};
user.age = 25; // OK, no error here
console.log(user.age); // 25

// But prevents to re-assign:
const user = {
  name: "John"
};
// Error (can't reassign user)
user = {
  name: "Peter"
};


// **************************************************************************************************
// Copying object harder way:
const user = {
  name: "Mykla",
  age: 26
};
const clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it
console.log(user.name); // still Mykola in the original object

// Copying object simple way:
const user = {
  name: "Mykola",
  age: 260
};
const clone = Object.assign({}, user)
// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it
console.log(user.name); // still Mykola in the original object

// Object.assign merges keys/values from objects from right to left:
let user = { name: "Mykola" };
let userAge = { age: 26 };
let isAdmin = { isAdmin: true };
// copies all properties from userAge into userAge, and then from userAge into user
const user2 = Object.assign(user, userAge, isAdmin);
console.log(user);
console.log(user2);

// Spread Operator "..." used to split up object properties OR array elements 
const oldObj = {oldProp: 1};
const newObj = {...oldObj, newProp: 4};
let user1 = { name: "Mykola" };
let userAge1 = { age: 26 };
let isAdmin1 = { isAdmin: true };
const userNew = {...user1, ...userAge1, ...isAdmin1};
console.log(user1);
console.log(userNew);

// Rest Operator "..." used to merge a list of function arguments into an array
function sortArgs(...args) {
  return args.sort()
}

const filter = (...args) => {
  return args.filter(el => el === 3); // args combine all argument into an array, so we can apply only method for arrays
}

console.log(filter(1, 2, 3, 4, 5)); //  return [3] as it's match the condition


// **************************************************************************************************
// Object Destructuring - extract object properties OR array elements and store them in variables
const {name} = {name: 'Mykola', age: 27};
console.log(name) // Mykola
console.log(age) // age is not defined

const {age, someOherKey} = {name: 'Mykola', age: 27};
console.log(age) // 27
console.log(someOherKey) // undefined
