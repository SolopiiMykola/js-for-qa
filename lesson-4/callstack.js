// Call stack is whole tree of nested function calls

function A() {
    return B();
  }
  
  function B() {
    return C();
  }
  
  function C() {
    return D();
  }
  
  function D() {
    return "data";
  }
  // uncomment
  // console.log(A());
  
  // **************************************************************************************************
  // Lets track how error propagates thru callstack:
  function A() {
    try {
      return B();
    } catch (err) {
      console.log(err.stack);
    }
  }
  
  function B() {
    return C();
  }
  
  function C() {
    return D();
  }
  
  function D() {
    return error
  }
  
  console.log(A());
  // Callstack how your code execute
  