'use strict';

// const Person = function (firstName, birthYear) {
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //instance methods (never do this as every instance will carry around this function whether it is using it or not)
//   //   this.calcAge = function () {};
// };

// const jake = new Person('Jake', 1996);
// console.log(jake);

// const morgan = new Person('Morgan', 1996);
// console.log(morgan);
// console.log(jake instanceof Person);

// // Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// jake.calcAge();
// morgan.calcAge();

// Person.prototype.species = 'Homo Sapiens';
// console.log(jake.species);
// console.log(jake.hasOwnProperty('firstName'));
// console.log(jake.hasOwnProperty('species'));

// console.log(jake.__proto__);
// console.log(jake.__proto__.__proto__);
// console.log(jake.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 6, 6, 4, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`The ${this.make} is going at ${this.speed} km/h`);
};

const ferrari = new Car('Ferrari', 300);

const ram = new Car('Ram', 167);

console.log(ferrari, ram);

ferrari.accelerate();
ferrari.accelerate();
ferrari.accelerate();
ferrari.accelerate();
ram.accelerate();
ram.accelerate();
ram.accelerate();
ferrari.brake();
ram.brake();
