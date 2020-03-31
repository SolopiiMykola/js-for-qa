let result = (a + b < 10) ? 'Few' : 'Many';

let age = 18
if (age >= 18 && age <= 90) 
console.log('Valid age')
else console.log('Too young')

const name = '';
if (name != null && name != undefined && name != '') {
    console.log(`Hello, ${name}, nice to meet you`);
} else {
  console.log('Type valid data');
}
const birthdayYear = '11'
if (birthdayYear != null && birthdayYear != undefined && birthdayYear != String) {
    console.log (`That makes you ${2020 - birthdayYear} years old`);
} else {
  console.log('Type valid data');
}


const numberToLetter = prompt('Please, enter number:');
// let letter;
if (!numberToLetter) {
    if (numberToLetter < 60) {
        alert("F");
      } else if (numberToLetter < 70) {
        alert("D");
      } else if (numberToLetter < 80) {
        alert("C");
      } else if (numberToLetter < 90) {
        alert("B");
      } else if (numberToLetter <= 100) {
        alert("A");
       }  
} else {
    alert('Invalid value, please type number')
}

// alert(`The number ${numberToLetter} is converted to the letter ${letter}`);


