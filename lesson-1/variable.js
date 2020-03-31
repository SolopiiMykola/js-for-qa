// Declaring
let message;

// Delayed declaring;
let message2;
message2 = 'Hi'; //store the string

// Not recommended
let car = 'BMW'; 
    engine = 'V8'; 
    model = '220';

// Accessing variable;
let message3;
message3 = 'Hey';
console.log(message3);

// let - can be changed
let a = 'Volvo';
a = 'ВАЗ';
console.log(a);

// let - link to memory
let message;
message = "Hi";

let message2 = message;
console.log(message2);

message = 'new value';
console.log(message)

// const - once declared and can't be changed
const country = 'UA';
country = 'USA'; // TypeError: Assignment to constant variable.
console.log(country);

// When you have high level const you should declare const with uppercase
const DEFAULT_SITE = 'google.com';

// By default use const instead of let