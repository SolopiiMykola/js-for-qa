// THIS reference
// But what if our functions need to work with data in the same object what they belongs to?
// JS has 'this' keyword to work with own structure:
// this allows you to access your self
function Human(name, favoriteFood, hoursOfSleep) {
    return {
      legs: 2,
      hands: 2,
      head: 1,
      name,
      favoriteFood,
      hoursOfSleep,
      walk: function() {
        // You can think about 'this' like 'myself', I try to access to some object key where I am
        console.log(`${this.name} is walking`);
      },
      eat: function() {
        console.log(`${this.name} is eating ${this.favoriteFood}`);
      },
      sleep: function() {
        console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
      }
    };
  }

  let human1 = new Human("Mykola", "Borcht", null);
  let human2 = new Human("Bob", "Pasta", 7);
  let human3 = new Human("John", "Fruits", 4);
  
  // Now output looks much more dynamic and flexible! Looks good!
  human1.walk(); // Mykola is walking
  human1.eat(); // Bob is eating Shaurma
  human1.sleep(); // John went sleep for 9 hours
  
  human2.walk(); // Bob is walking
  human2.eat(); // Bob is eating Pasta
  human2.sleep(); // Bob went sleep for 7 hours
  
  human3.walk(); // John is walking
  human3.eat(); // John is eating Fruits
  human3.sleep(); // John went sleep for 4 hours
  
  // Actually we can now remove 'return' and wrapping object:
  function Human(name, favoriteFood, hoursOfSleep) {
    console.log('THIS', this); 
    this.legs = 2;
    this.hands = 2;
    this.head = 1;
    this.name = name;
    this.favoriteFood = favoriteFood;
    this.hoursOfSleep = hoursOfSleep;
    this.walk = function() {
      console.log(`${this.name} is walking`);
    };
    this.eat = function() {
      console.log(`${this.name} is eating ${this.favoriteFood}`);
    };
    this.sleep = function() {
      console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
    };
  }
  // new Human() syntax will automatically create object for us and return 'this'
  // new key means run your function and return done object
  let human1 = new Human("Mykola", "Borcht", null);
  let human2 = new Human("Bob", "Pasta", 7);
  let human3 = new Human("John", "Fruits", 4);
  
  // Still works the same:
  human1.walk(); // Mykols is walking
  human1.eat(); // Mykols is eating Borsch
  human1.sleep(); // Mykols went sleep for null hours
  
  // Lets look closer on 'this':
  function Human(name, favoriteFood, hoursOfSleep) {
    this.legs = 2;
    this.hands = 2;
    this.head = 1;
    this.name = name;
    this.favoriteFood = favoriteFood;
    this.hoursOfSleep = hoursOfSleep;
    this.walk = function() {
      console.log(`${this.name} is walking`);
    };
    this.eat = function() {
      console.log(`${this.name} is eating ${this.favoriteFood}`);
    };
    this.sleep = function() {
      console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
    };
  
    this.logThis = function() {
      console.log(`Got this: ${this}`);
      console.log(`Got this: ${Object.keys(this)}`);
    };
  }
  //
  let human1 = new Human("Mykola", "Borcht", null);
  let human2 = new Human("Bob", "Pasta", 7);
  let human3 = new Human("John", "Fruits", 4);
  
  human1.logThis();
  // Our this is Mykola, has keys: legs,hands,head,name,favoriteFood,hoursOfSleep,walk,eat,sleep,logThis
  
  human2.logThis();
  // Our this is Bob, has keys: legs,hands,head,name,favoriteFood,hoursOfSleep,walk,eat,sleep,logThis
  
  human3.logThis();
  // Our this is John, has keys: legs,hands,head,name,favoriteFood,hoursOfSleep,walk,eat,sleep,logThis
  
  