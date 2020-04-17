//task1

/*
We have an object storing salaries of our team:

let salaries = { John: 250, Ann: 250, Peter: 500 } 
Write the function to sum all salaries and return it. 
Should be 1000 in the example above.

If salaries is empty, then the result must be 0.
*/

let salaries = {John: '250', Ann: 'null', Peter: 500};

let sumSalaries = (obj) => {
    if (Object.keys(obj).length === 0) {
        return 0
    } else {
        let sum = 0;
        for (let key in obj) {
             if (obj[key] == '' || isNaN(obj[key])) {
             continue }
             sum += +obj[key];
            }
        return sum
    }
}

console.log(sumSalaries(salaries))

//task2 

/*
We have an object storing salaries of our team:
let salaries = { John: 250, Ann: 250, Peter: 500 } 
Write the function that returns name and value of employer that gets biggest salary
*/

let salaries = { John: 250, Ann: 250, Peter: 500 };

let topEmployer = (obj) => {
if (Object.keys(obj).length === 0) return null
else {
    let max = 0;
    let name;
    for (let key in obj) {
        if (obj[key] == '' || isNaN(obj[key])) continue;
        if (obj[key] > max) { 
            max = obj[key];
            name = key;
        }
    }
    return [max, name];
}
}


console.log(topEmployer(salaries))


//task3

/*
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:
before the call 
let menu = { width: 200, height: 300, title: "My menu" };
multiplyNumeric(menu);
after the call 
menu = { width: 400, height: 600, title: "My menu" }; 
Please note that multiplyNumeric does not need to return anything. 
It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/

let menu = { width: 200, height: 300, title: 'My menu' };

let multiplyNumeric = (updatedMenu) => {
    if (Object.keys(updatedMenu).length === 0) return null;
    for (let key in updatedMenu) {
        if (typeof(updatedMenu[key]) == 'number' ) {
            updatedMenu[key] = updatedMenu[key] * 2; 
        }
    }
    return updatedMenu;
}

console.log(multiplyNumeric(menu))

//task4

/*
Show stars function showStars(rows) 
{ for (let row = 1; row < rows; rows++ ){ let star = *; for() } }
showStars(4) // * ** *** ****
*/

let showStars = (numb) => {
    if (numb == '' || isNaN(numb)) return 'Enter a number';
    let str = String();
    let resultString = String();
    for (let i = 0; i < numb; i++) {
        str += '*'; 
        resultString = resultString + str + ' ';
    }

    return resultString.trimRight()
}

console.log(showStars(4))