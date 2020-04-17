// To import something from other file in NodeJS - use global 'require' function

// Accepts one parameter - relative path to file, .js can be skipped
// Define import statement on the top of page
let exportsObj = require("./export");

console.log(exportsObj);

// To import only one property of 'exports' object
let doImportantTask = require("./export").doImportantTask;


// You can use 'require' everywhere in your code
// but it is a good pracice to keep it at file begining
function myFunc() {
  let doImportantTask = require("./export").doImportantTask;
  doImportantTask();
  // Or just
  require("./export").doImportantTask();
}

// require throws errors, that you can handle with try/catch
try {
  require("./nonexist");
} catch (err) {
  console.log(err);
}

// You can use 'require' to import JSON files as well
let myjson = require("./1.json");

// JSON files will be automatically parsed from string to JSON
// so you dont need to use JSON.parse

console.log("Got specialization", myjson.specialization);


// Provide examples with the node js module