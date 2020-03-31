// Operand, Unary/Binary
// = operator to store some value
// Operand is what operator is applied to 
// “Unary” operator with only one operand
// “Binary” operator that works with two operand

let x = 2;
let y = 2;

console.log(x + y); // Binary operators applied, two operand: x and y, cals expression
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);

// /////////////////////////////////////////////////////////////////
// + binaty operator

let a = 2 + 2;
console.log(a); // 4
console.log(2 + 2 + 2 + 2);

// If both operators are strings - they will be merge to one string
let b = "ALYONA" + " ALYONA";
console.log(b) // "ALYONA ALYONA"

// If one of the operands is string the other one is converted to string too
console.log('2' + 1); 
console.log(1 + '2');
console.log('ВАЗ ' + 2106);

// But execution order is still works from the left to right
console.log(2 + 2 + '2');
console.log('2' + 2 + 2);
// This is a specific case for + binary operators
// Return string

// Other arithmetic operator always convert their operands to numbers
console.log(2 - '2');
console.log('6' / '2');
console.log('8' * '2');
console.log(2 - '2a'); 

console.log(2 ** 3);

///////////////////////////////////////////////////////////////////////

// Unar +
// If the operand is not a number. the unary plus convert it into a number
// unary operator applied, One operand: c
let c = 1;
console.log(+c);

let d = -1;
console.log(+d);
// Unar + convert string to number
let g = '1';
console.log(+g);

// But non-numbers are converted 
console.log(+true);
console.log(1 + +"1");

///////////////////////////////////////////////////////////////////////
// Increment/Decrement

// Increment number by one (++)
let incrementCounter = 1;
incrementCounter++;
//incrementCounter = incrementCounter + 1;
console.log(incrementCounter);

// Decrement number by one
let decrementCounter = 1;
decrementCounter--;
console.log(decrementCounter);

// Prefix increment
let prefixIncrementCounter = 1;
let f = ++prefixIncrementCounter;
console.log(f);

// Postfix increment operator returns OLD value
// Prefix increment operator returns NEW value
let prefixIncrementCounter1 = 1;
let f1 = ++prefixIncrementCounter1;
console.log(f);

let incrementCounter1 = 1;
let g = incrementCounter1++;
console.log(g);

////////////////////////////////////////////////////////////////////////

// Modify-in-place
// When you need modify variable and overwrite its value
let x = 10;
// x++
x = x + 1;
x += 5
console.log(x);

// You can also use 
let h = 2;
h = h - 2;
h -= 2;
h = h * 2;
h *= 2;
console.log(h);


////////////////////////////////////////////////////////////////////////////////////
// &&, || and ! operator
// Use when work with condition
// Logical && return TRUE if both operand equeals true
console.log(true && false);
// Logical OR operator return true if one operator = true
console.log(true || false);
// ! oposit
console.log(!true);

// Logical operators with non boolean
console.log(true || false);
console.log(false || 'Mykola');
console.log(false || 1);
console.log(false || 1 || 2);

// Falsy (false)
// false
// undefined
// null
// 0 
// ''
// NaN

// Anything that is not falsy -> Thruthy

let loginPage = '/login'; // undefined
let defaultPage = '/some-default-page';

let currentPage = loginPage || defaultPage;

console.log(currentPage);
