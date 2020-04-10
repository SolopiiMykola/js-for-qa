// ******************************************************************************************
  // CLASS
  // Actually all what we did before, has special syntax, and even more advanced capabilities:
  // Class is special way to define complex objects:
  class Human {
    // constructor function will be called at object creation
    // you don't need to put function key word
    // constructor actualy constract your function
    constructor(name, favoriteFood, hoursOfSleep) {
      // you can set any your custom properties
      this.legs = 2;
      this.hands = 2;
      this.head = 1;
      this.name = name;
      this.favoriteFood = favoriteFood;
      this.hoursOfSleep = hoursOfSleep;
    }
    walk() {
      this.someVariable = 'value'; // undefined
      console.log(`${this.name} is walking`);
    };
    eat() {
      console.log(`${this.name} is eating ${this.favoriteFood}`);
    };
    sleep() {
      console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
    };
  }
  
  // Usage is still same:
  let human1 = new Human("Mykola", "Borcht", null);
  human1.walk(); // Mykola is walking
  human1.eat(); // Mykola is eating Borcht
  human1.sleep(); // Mykola went sleep for null hours
  // There are no special type for Class, it is still constructor function, as we started in the begining
  console.log(typeof Human); // function
  // For created object it is object 
  console.log(typeof new Human()); // object
  
  
  // There are special way do declare functions in class, shorter, cleaner and readeble:
  // You also need "new" when try to build object with a class
  // Class key word work the same as for function, it is just a syntax suger for your constractor
  // In js we don't have concept of classes, there are no type Class in js
  class Human {
    // for constructor the same rule as for a regular function
    constructor(name, favoriteFood, hoursOfSleep) {
      this.legs = 2;
      this.hands = 2;
      this.head = 1;
      this.name = name;
      this.favoriteFood = favoriteFood;
      this.hoursOfSleep = hoursOfSleep;
    }
    walk() {
      console.log(`${this.name} is walking`);
    }
    eat() {
      console.log(`${this.name} is eating ${this.favoriteFood}`);
    }
    sleep() {
      console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
    }
    walkAndEat() {
      this.eat()
      this.walk()
    }
  }
  
  // Usage is still same:
  // You also need new when try to build object with a class
  let human1 = new Human("Mykola", "Borcht", null);
  human1.walk(); // Mykola is walking
  human1.eat(); // Mykola is eating Borcht
  human1.sleep(); // Mykola went sleep for null hours


// Example of using class and constructor
  class LoginPage {
    constructor() {
        this.title = 'some selector';
    }

    getPageText() {
        webDriver.getText(this.title);
    }
}
  
  