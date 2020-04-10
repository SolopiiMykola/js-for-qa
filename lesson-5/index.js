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
