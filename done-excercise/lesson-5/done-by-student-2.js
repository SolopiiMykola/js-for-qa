//task1

// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ... 
// So, the result should be ["a", "c"]



let movies = [
    {title: 'a', year: 2019, raiting: 4.7},
    {title: 'b', year: 2018, raiting: 4.4},
    {title: 'c', year: 2019, raiting: 4.3},
    {title: 'd', year: 2019, raiting: 3.9}
]

//new array with filtering
let moviesNew = movies.filter(movie => {
    if (movie.year == 2019 && movie.raiting > 4) return movie;
})

//sorting
moviesNew.sort((a, b) => (a.raiting - b.raiting)).reverse();

//display only title
let titleList = [];
for (let el of moviesNew) {
    titleList.push(el.title)
}

console.log(titleList);

//task2

// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers

function arrayFromRange(min, max) {
    let arr = [];
    if (isNaN(max) || isNaN(min)) return null;
    for (let el = min; el < max + 1; el++) {
        arr.push(el); 
    }
    return arr
}

const numbers = arrayFromRange(-5, 3);

console.log(numbers);

//task 3

// Need to create function which display the max number from the array

const numbers = [1, 'gkjnk', 13, 4, 5];

function getMax(arrOfNumb) {
    if (arrOfNumb.length == 0) return null;
    let max = 0;
    for (let el = 0; el < arrOfNumb.length; el++) {
        if (isNaN(arrOfNumb[el])) continue;
        if (arrOfNumb[el] > max) max = arrOfNumb[el];
    }
    return max
}

const maxNumber = getMax(numbers);
console.log(maxNumber)