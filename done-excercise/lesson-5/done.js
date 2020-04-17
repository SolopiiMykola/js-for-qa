class Car {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    accelerate(amount) {
        console.log(this.speed)
        return this.speed += amount;
    };
    breake(amount) {
        return this.speed -= amount;
    };
    status() {
        return `${this.brand} ${this.model} running at ${this.speed} km/h`;
    };
}

// Now use create a Car object using the class

let car = new Car("Renault", "Scenic", 60);// Should return new object

// Then create additinal class CarColor, exteds from the Car class and add new method carColor() in this class
// which return car color

class CarColor extends Car {
    constructor(brand, model, color) {
        super(brand, model);
        this.color = color;
        this.carColor = function () {
            return `${this.brand} ${this.model} has ${this.color} color`;
        };
    }
}

car = new CarColor("Renault", "Scenic", "Red");

console.log(car.carColor());