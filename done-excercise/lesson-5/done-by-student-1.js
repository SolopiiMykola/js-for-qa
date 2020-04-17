// Exercise 2
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers
function arrayFromRange(min, max) {
    if ((!!+min || +min == 0) && (!!+max || +max == 0) && max > min){
        const arr =[min];
        for (let i =1; i <= (max - min); i++){
            arr.push(min + i)
        }
        return arr
    }
    return `Not valid data of range ` 
}

const numbers = arrayFromRange(1, 4);

console.log(numbers); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, 0);
console.log(negativeNumbers); // Should display [-10, -9, -8]



// // Exercise 3
// // Need to create function which display the max number from the array

const numbers2 = ["fh",1, 2, 3, 4, 5, 19];
const maxNumber = getMax(numbers2);

console.log(maxNumber)

function getMax(numbers) {
    return numbers.filter(element => !!+element || +element == 0)
    .sort((elementA, elementB) => elementB - elementA)[0]  
}


// // another varian Exercise 3
const numbers1 = [,'-8',-1, 2, -3, -4, 5, 0, null, , function Many(){},[], {}, "rfd12", '12a'];
const maxNumber1 = Math.max(...numbers1.filter(element => !!+element || +element == 0));
console.log(maxNumber1) // should display max number from the array 5




// //// Exercise 4

let movies = [
    {title: 'a', year: 2019, rating: 4.7}, 
    {title: 'b', year: 2018, rating: 4.4},   
    {title: 'c', year: 2019, rating: 4.3},   
    {title: 'd', year: 2019, rating: 3.9},
];
function getMovies (movies){
    if (movies.length){
        return movies.filter(element => element.year == 2019 && element.rating > 4)
        .sort((rateElemFirst,rateElemSecond) => rateElemSecond.rating - rateElemFirst.rating)
        .map(element => element.title)
    }
    return "invalid data";
}
console.log(getMovies(movies));
