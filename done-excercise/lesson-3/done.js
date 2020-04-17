function isEmpty(object) {
    return Object.keys(object).length > 0 ? false : true;
}

function isEmpty(object) {
    return Object.keys(object).length === 0
    }

function maxNumber(a, b) {
    if (a > b) return a;
    else return b;
    // return (a > b) ? a : b;
}

let maxNumber = (a, b) => (a > b) ? a : b;

function showStars(rows) {
    for (let row = 1; i <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
            console.log(pattern);
        }
    }
}

console.log(sum);
function salarySum(object) {
    let sum = 0;
    for (let key in object) {
        if (object[key] == "" || isNaN(object[key])) {
            continue;
        }
        sum += object[key];
    }
    return isNaN(sum) ? 0 : sum;
}

function biggestSal (obj){

    for (let key in obj) {
      const max = Math.max.apply(null, Object.values(obj));
      return console.log(key+ " " + max) ; 
    }     

  }
console.log(biggestSal(salaries));

let salaries = { John: 250, Ann: 250, Peter: 500 };

let nameWithMaxSalary = Object.keys(salaries).reduce((a, b) => salaries[a] > salaries[b] ? a : b);
nameWithMaxSalary = nameWithMaxSalary.length > 0 ? nameWithMaxSalary : "'No name'";

let maxSalaryAmount = Object.values(salaries).reduce((a, b) => a > b ? a : b);
maxSalaryAmount = isNaN(maxSalaryAmount) ||
    !isFinite(maxSalaryAmount) ||
    maxSalaryAmount.length == 0
    ? 0 : maxSalaryAmount;

alert(`${nameWithMaxSalary} has the max salary ${maxSalaryAmount} among the company`);

function multiplyNumeric(object) {
    for (let value in object) {
        if (typeof object[value] == 'number') {
            object[value] *= 2;
        } else {
            continue;
        }
    }
    return object;
}