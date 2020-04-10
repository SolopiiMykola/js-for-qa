// One of the key features of classes - is ihneritance
class Human {
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
  }
  // -------------- extends - is keyword used to merge 2 classes together
  class HumanWorker extends Human {
  // let a = ''; // error
    // Gets all properties from Human AND new function
    work() {
      console.log("HumanWorker is working!");
    }
  }
  let worker1 = new HumanWorker("Homer", "Donuts", 12);
  worker1.work(); // HumanWorker is working!
  worker1.sleep(); // Homer went sleep for 12 hours
  // .sleep() is still available because we inherited (extended) Human
  
  // sometimes you need to use access properties of extended class:
  class HumanWorker extends Human {
    work() {
      console.log('HumanWorker object', this);
      // Will try to find property this in current created object,
      // and if it not exist - will search in parrent object for same property
      console.log(`${this.name} is working`);
    }
  }
  
  let worker1 = new HumanWorker("Homer", "Donuts", 12);
  worker1.work(); // Homer is working
  
  // ******************************************************************************************
  // Ofcourse you can declare constructor in child classes:
  class HumanWorker extends Human {
    // getting more parameters, saving salary, and just passing the rest to parent constructor
    constructor(name, favoriteFood, hoursOfSleep, salary) {
        // "super" is a reference to your parant class like "this"
      super(name, favoriteFood, hoursOfSleep); // This is IMPORTANT!! We are call the constactor of our paren class
      // the rule is in case when you need to create your constractor and call constructor of your parent class call super at the first place
      // you should call parent constructor before trying to access 'this'
      // Otherwise error: `this is not defined` will happen
      this.salary = salary;
    }
  
    work() {
      console.log(`${this.name} is working and will get ${this.salary}$`);
    }
  }
  // 'super' is simular to 'this', but refers to parent class
  // Use super to access parent properties, methods and even constructor
  let worker1 = new HumanWorker("Homer", "Donuts", 12, 2000);
  worker1.work(); // Homer is working
  
  // Override and reusing parrent methods
  
  // We actually missed one thing...
  // Homer usually usually does not work...
  // Lets fix this:
  class Homer extends HumanWorker {
    // getting NO parameters, just hardcoding parameters in parent constructor
    constructor() {
      super("Homer", "Donuts", 12, 2000); // call parent constructor
    }
    // Override method which exist in the parent class
    work() {
      console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
    }
  }
  // Now our 'work' method works correctly for Homer
  new Homer().work(); // Homer went sleep for 12 hours
  // This is called 'override'.
  // Form of 'shadowing' for methods inside of objects
  
  // But wait. .work() and .sleep() code is now the same, maybe we can reuse method from parrent class?
  
  class Homer extends HumanWorker {
    // getting NO parameters, just hardcoding parameters in parent constructor
    constructor() {
      super("Homer", "Donuts", 12, 2000);
    }
    work() {
      // accessing method from parrent class, and calling it
      // Avoiding code duplication
      super.sleep();
      console.log('test')
    }
  }

// hosting
// function declaretion
move();
function move() {
    console.log("Move");
}

// function expression
sleep();
let sleep = function sleep() {
    console.log("Sleep");
}
  
  