// Comparsion
// Compare value with something else
// Return boolean
let x = 1

// Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

let res = 1 < 2;
console.log(res);

// If types are different, JS convert the value to number

console.log('2' > 1);

// ####################################################
// Strings are compared letter-by-letter
console.log('Z' > 'A');
console.log('YYY' > 'AAA');
console.log('CCC' > 'ccc');
// Unicode letters order is used

// #####################################################
// Equality operators
// Equal and Strict Equal check

// Strict Equaility (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equaility
console.log(1 == 1);
console.log('1' == 1);
console.log(x != 1);
console.log(true == 1);
console.log(false == 0);

// #####################################################
// Null and Undefined
console.log(null === undefined); // false

// But when using soft equal they convert to boolean 
console.log(null == undefined); // true backward compatibility

// != !==
console.log(2 != '2');
console.log(2 !== '2');
 // false
