// Numbers
let numb = 123 // int
numb = 12.34 // float

// Also numbers: Infinity, -Infinity and NaN

// Infinity
console.log(1 / 0);

// NaN - calculation error
console.log('not a number' / 2 + 2);

// Strings
let oneQuoteStr = 'One quote S';
let doubleQuotesStr = "Double quote's String";

// Allows include some statement inside your string call like a tamplate string
let qa = "QA";
let name = 'Karl';
let phrase = `can add ${name + qa}`;
let oldPhrase = 'Hello, '+ name +' nice to meet you';
let phraseParagraph = `can add ${name + qa}, 
and add Paragraph`;

console.log(phrase);
console.log(oldPhrase);
console.log(phraseParagraph);

// Bolleans
let truth = true;
let lie = false;

// Null (empty box)
let nothing = null;
console.log(nothing)

// Undefined means the variable has been declared, but it has not yet been assigned a value
let emptiness;
console.log(emptiness) // Undifined

// typeof 
typeof undefined; // undefined

typeof 0; // number

typeof true; // boolean

typeof 'str'; // string

typeof Math; // object

typeof []; // object

typeof null; // object

typeof console.log; //function
