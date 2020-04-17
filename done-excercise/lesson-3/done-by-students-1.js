//Create object post which should contain title body author views comment which contain information about the authot first and last name and comment body isLive
let post ={
    title: "Title",
    body: "Body",
    author: "Lyudmila",
    comment: {
        firstName: "Lyudmila",
        lastName: "Dzubenko",
        bodyComent: "Test1"
    }
}

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj){
    return Object.keys(obj).length==0
}
let mas={test:11};
console.log(isEmpty(mas));

//Write the function that takes two numbers and returns the maximum of two

const maxNumber = (a,b) => typeof a=="number" && typeof b=="number" ? (a>b ? a:b):NaN;
console.log(maxNumber(2,6));

//We have an object storing salaries of our team: Write the function to sum all salaries and return it. Should be 1000 in the example above.
let salaries = { 
    John: 250,
    Ann: 250,
    Peter: 500,
    Mila:"hskjdf800",
    Nik: "600"
}
function sumSalaries(obj){
    let sum=0;
    if (!isEmpty(obj)){
        Object.values(obj).forEach(x => {
            if (+x) sum += +x 
        } );
    }
    return sum;
}
console.log(sumSalaries(salaries));

//We have an object storing salaries of our team: Write the function that returns name and value of employer that gets biggest salary
function maxSalary(obj){
    let salary=0;
    let name="";
    Object.keys(obj).forEach(x => { 
        if (+obj[x] && obj[x] > salary ) {
            salary= obj[x];
            name =x
        } 
    });
    return `${name}: ${salary}`
}

console.log(maxSalary(salaries))

//Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
let menu = { 
    width: 200,
    height: 300,
    title: "My menu" 
};
function multiplyNumeric(obj){
    Object.keys(obj).forEach(x=>{
        if (typeof obj[x]=="number") obj[x]*=2
    })
}
multiplyNumeric(menu);
console.log(menu)

//Show stars function showStars(rows) { for (let row = 1; row < rows; rows++ ){ let star = *; for() } }
function showStars(rows) { 
    var sumstar="";
    for (let row = 1; row <= rows; row++ ){
        let star = "*"; 
        for(let i=1; i<row; i++){
         star+="*"
        }
        star+= " "
        sumstar += star;
     }
     return sumstar 
}

console.log(showStars(4))

//another veriant stars 

function showStars2(rows){
    let star ="";
    for (let row=1; row <=rows; row++ ){
        star+= new Array(row).fill("*").join('')+' '
    }
    return star
}

console.log(showStars2(5))
