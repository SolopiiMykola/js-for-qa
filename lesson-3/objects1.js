// Objects part 1
// It is a special structure, you can defined for your data
// It is a collection of key-value pairs
// Everything in js realize as a object
// Key it is a link to your date, value - this is a data behind this link
// You can accesing data by the keys

let name = 'Mykola';
let country = 'Ukraine';
let specialization = 'QE';
let year = 26;
let isHappyFather = true;

// Empty object declaration (object literal)
// You can use let or const
const emptyObj = { };

// Simple object example
// Represent some user
const me = {
  name: "Mykola",
  country: "Ukraine",
  specialization: "SDET",
  year: 26,
  isHappyFather: true,
};

// Object is a mutiable
// Get property
// Works with like a variable to extract some part of your object
// Dot notation
const name = me.name;
console.log(name); // Mykola

// Return undefined if key is not valid
const name = me.lastName;
console.log(name);

// Set property even if this not reassign
me.city = "Andrushivka";
console.log(me);
// You can also overwrite your existing property
me.city = "Kyiv";
console.log(me);

// Remove property
delete me.country;
console.log(me);

// Keep in mind, this will NOT remove property key, from object,
// only set its value as undefined!
me.city = undefined;
console.log(me);

// **************************************************************************************************
// Square brakets
// You can use [""] to declare and access properties,
// thats usefull for using spaces in keys or for dynamically declaration
const someone = {
  "name": "Peter Parker",
  "country": "USA",
  "1test": "test",
  "special powers": "Spiderman" // trailing comma is useful to quickly modify properties
};
console.log(
  "Power:",
  // someone.special powers // OOps - error! no space allowed!
  someone["special powers"]
);

// OR
let keyname = "special powers";
console.log("Power:", someone[keyname]);

// **************************************************************************************************
// Computed properties - allow to define properties in runtime
// Actually same as assigining thru square brakets
// It it useful when you don't know what is the key should be there
const fruit = prompt("Which fruit to buy?");
const bag = {
  [fruit]: 5 // the name of the property is taken from the variable fruit
};
alert(bag);

// **************************************************************************************************

// Reserved words are allowed as property names
let lol;
let obj = {
  for: 1,
  let: 2,
  return: 3,
  const: 'asdf'
};
console.log(obj.for + obj.let + obj.return); // 6
