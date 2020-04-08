// try/catch/finally

// Run in browser
try {
    console.log("try");
    if (confirm("Make an error?")) {
      BAD_CODE();
    }
  } catch (e) {
    console.log("catch");
  } finally {
    console.log("finally");
  }
  // Finally block gets executed in ANY case - no matter error was or not
  // Use finally if you need to clean up your code
  
  // finally and return
  // What this code will print?
  function finallyAndReturn() {
    try {
      return 1;
    } catch (error) {
      console.log(error);
    } finally {
      return 2; // overwrite yor first return block
    }
  }
  let res = finallyAndReturn();
  console.log(res); // 2
  
  /**
   Since finally executed AFTER try in ANY case, 
   return from finally will overwrite try/catch block return
  */
  
  function catchAndReturn() {
    try {
      return 1;
    } catch (error) {
      return 2;
    } finally {
      return 3;
    }
  }
  let res = catchAndReturn();
  console.log(res); // 3
  
  // Same here - finally replaces value of all other previous returns
  // Use finally to correctly close database connections, write logs,
  
  // Try can be used without catch
  
  try {
    nondef;
  } finally {
    console.log("i still work!");
  }
  
  // In this case error will be thrown outside, but finally will be executed
  