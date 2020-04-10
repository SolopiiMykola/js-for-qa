// Rewrite function with Class
function createCar(brand, model, speed) {
	let car = {
		// properties
        brand,
        model, // We use the function parameter
		speed,
		// methods:
		accelerate: function(amount) {
			this.speed += amount;
		},

		brake: function(amount) {
			this.speed -= amount;
		},

		status: function() {
			return this.brand + this.model + " running at " + this.speed + " km/h";
		}
	};
	return car;
}

// Now use create a Car object using the class

class Car {
    // Your code
}

let car = new Car("Renault", "Scenic", 60);

console.log(car); // Should return new object
console.log(car.status()); // Renault Scenic running at 60 km/h 

// Then create additinal class CarColor, exteds from the Car class and add new method carColor() in this class
// which return brand model and car color
car = new CarColor("Renault", "Scenic", "Red");

console.log(car);
console.log(car.carColor()); // Renault Scenic has Red color