// Working with try/catch for errors

// show example witout try catch;
try {
    console.log("Start of try runs");
    nonvariable; // error, variable is not defined!
    console.log("End of try (never reached)"); // try block interupted, so this never be executed
  } catch (error) {
    console.log(`Error has occured!`);
  }
  console.log("...Then the execution continues");
  
  // try..catch only works for runtime errors
  
  // JS engine can't read this code, so cannot run
  /* commented
  try {
      &*()
  } catch(e) {
  // JS cannot catch syntax errors!
  }
  */
  
  // ***************************************************************************
  // Default error object structure
  try {
    nonvariable; // error, variable is not defined!
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // nonvariable is not defined
    console.log(err.stack); // callstack with functions calls
    
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log("Error obj", err); // ReferenceError: nonvariable is not defined
  }
  // ***************************************************************************
  // Rethrowing
  function parseUser(json) {
    try {
      return JSON.parse(json);
    } catch (err) {
      console.log("parseUser got error: ", err.message);
      throw err; // break stack of execution by throwing some error
    }
  }
  parseUser("not a json");
  
  // Use if/else to handle only errors that you know how to handle, and rethrow all others
  function parseUser(json) {
    try {
      return JSON.parse(json);
    } catch (err) {
      if (err.name == "SyntaxError") {
        console.log("JSON Error: " + err.message);
      } else {
        console.log(err)
        // Rethrowing everything except SyntaxError
        throw err;
      }
    }
  }
  parseUser("not a json");
  
  
  // ***************************************************************************
  // Throwing our own errors
  function parseUser(json) {
    let user = JSON.parse(json);
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }
    return user;
  }
  parseUser('{ "age": 30 }');
  
  // It is strongly recommended to throw Error-compatible objects (with name, message, stack)
  // For example: 
  // throw {name: 'MyNiceError', message: 'Some nice description of what happened'}
  
  // But actually you can throw anyghing, this is valid, but mostly useless
  // throw true;
  
  let myError = new Error()
  myError.name = 'OwnError'
  myError.message = 'Some nice message'
  throw myError