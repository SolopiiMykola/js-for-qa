// First lets see the problem that we are trying to solve with classes
// We have same object structure for different data:
let human1 = {
    legs: 2,
    hands: 2,
    head: 1,
    name: "Mykola",
    favoriteFood: "Borsht",
    hoursOfSleep: Null
  };
  
  let human2 = {
    legs: 2,
    hands: 2,
    head: 1,
    name: "John",
    favoriteFood: "Fruits",
    hoursOfSleep: 4
  };
  
  let human3 = {
    legs: 2,
    hands: 2,
    head: 1,
    name: "Bob",
    favoriteFood: "Pasta",
    hoursOfSleep: 7
  };
  // Duplication, and easy to make mistakes, hard to reuse...
  
  // Constructor function
  // Let's prepare function that will build objects for us,
  // with default parameters that are shared for all humans:
  function createHuman(name, favoriteFood, hoursOfSleep) {
    return {
      legs: 2,
      hands: 2,
      head: 1,
      name,
      favoriteFood,
      hoursOfSleep
    };
  }
  let human1 = createHuman("Mykola", "Borcht", null);
  let human2 = createHuman("Bob", "Pasta", 7);
  let human3 = createHuman("John", "Fruits", 4);
  
  // Let's rename our function:
  // Best practice to create constructor function with apper case
  // Function which create new object
  function Human(name, favoriteFood, hoursOfSleep) {
    return {
      legs: 2,
      hands: 2,
      head: 1,
      name,
      favoriteFood,
      hoursOfSleep
    };
  }
  // This will look more like special complex object Human:
  let human1 = Human("Mykola", "Borcht", null);
  let human2 = Human("Bob", "Pasta", 7);
  let human3 = Human("John", "Fruits", 4);
  
  // NEW operator
  // move step by step to object oriented style 
  // And lets add 'new', to be even more to our idea of constructing Humans:
  let human1 = new Human("Mykola", "Borcht", null);
  let human2 = new Human("Bob", "Pasta", 7);
  let human3 = new Human("John", "Fruits", 4);
  console.log(human1);
  console.log(human2);
  console.log(human3);
  
  // Functions as a properties
  // Going forward in our idea, let's add some actions for our humans!
  // Produce something
  function Human(name, favoriteFood, hoursOfSleep) {
    return {
      legs: 2,
      hands: 2,
      head: 1,
      name,
      favoriteFood,
      hoursOfSleep,
      // Objects can contain functions as well
      walk: function() {
        console.log("Human is walking!");
      },
      eat: function() {
        console.log("Human is eating!");
      },
      sleep: function() {
        console.log("Human is sleeping!");
      }
    };
  }
  let human1 = new Human("Mykola", "Borcht", null);
  let human2 = new Human("Bob", "Pasta", 7);
  let human3 = new Human("John", "Fruits", 4);
  
  // we can actualy call this function
  human1.walk(); // Human is walking!
  human1.eat(); // Human is eating!
  human1.sleep(); // Human is sleeping!
  
  human2.walk(); // Human is walking!
  human2.eat(); // Human is eating!
  human2.sleep(); // Human is sleeping!
  
  human3.walk(); // Human is walking!
  human3.eat(); // Human is eating!
  human3.sleep(); // Human is sleeping!
  