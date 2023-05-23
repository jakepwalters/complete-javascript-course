// 'use strict';

// // const bookings = [];

// // const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };

// // createBooking('LH123');
// // createBooking('LH456', 8, 800);
// // createBooking('LH456', 8);
// // createBooking('LH456', undefined, 800);

// // const flight = 'LH234';
// // const jake = {
// //     name:'Jake Walters',
// //     passport: 73847485
// // }

// // const checkIn = function(flightNum, passenger) {
// //     flightNum = 'lh9999';
// //     passenger.name = 'Mr. ' + passenger.name;

// //     if(passenger.passport === 73847485) {
// //         alert('Check in')
// //     } else {
// //         alert('Wrong passport!')
// //     }
// // }

// // // checkIn(flight, jake)
// // // console.log(flight);
// // // console.log(jake);

// // const newPassport = function (person) {
// //     person.passport = Math.trunc(Math.random() * 1000000);
// // }

// // // newPassport(jake)
// // // checkIn(flight, jake)

// // const oneWord = function (str) {
// //   return str.replace(/ /g, '').toLowerCase();
// // };

// // const upperFirstWord = function (str) {
// //   const [first, ...otherWords] = str.split(' ');
// //   return [first.toUpperCase(), ...otherWords].join(' ');
// // };

// // //higher order function because it takes in another function (or a callback function)
// // const transformer = function (str, func) {
// //   console.log(`original string: ${str}`);
// //   console.log(`Transformed string: ${func(str)}`);
// //   console.log(`Tranformed by: ${func.name}`);
// // };

// // transformer('Javascript is great', upperFirstWord);
// // transformer('Javascript is great', oneWord);

// // const high5 = function () {
// //   console.log('High Five!');
// // };

// // document.body.addEventListener('click', high5);

// // ['Jake', 'Morgan', 'Liam'].forEach(high5);

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greeterHey = greet('Hey');
// // greeterHey('Jake');
// // greeterHey('Morgan');

// // greet('Hello')('Jake');

// // const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// // greetArr('hello')('Morgan')

// // call method

// // const airCanada = {
// //   airline: 'Air Canada',
// //   iataCode: 'AC',
// //   bookings: [],
// //   book: function (flightNum, name) {
// //     console.log(
// //       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// //     );
// //     this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
// //   },
// // };

// // airCanada.book(8823, 'Jake Walters');
// // airCanada.book(8823, 'Morgan Toole');
// // console.log(airCanada);

// // const airCanadaJazz = {
// //   airline: 'Air Canada Jazz',
// //   iataCode: 'ACJ',
// //   bookings: [],
// // };

// // const book = airCanada.book;

// // book.call(airCanadaJazz, 23, 'Richard MacNevin');
// // console.log(airCanada);
// // console.log(airCanadaJazz);

// // // apply method

// // const flightData = [583, 'Phil Walters'];
// // book.apply(airCanada, flightData);
// // console.log(airCanada);

// // // bind method
// // const bookACJ = book.bind(airCanadaJazz);
// // bookACJ(23, 'Andrew Murphy');
// // console.log(airCanadaJazz);

// // const bookACJ23 = book.bind(airCanadaJazz, 23);
// // bookACJ23('Rylie Sellers');
// // console.log(airCanadaJazz);

// // //using bind with event listeners

// // airCanada.planes = 300;
// // airCanada.buyPlane = function () {
// //   console.log(this);
// //   this.planes++;
// //   console.log(this.planes);
// // };

// // document
// //   .querySelector('.buy')
// //   .addEventListener('click', airCanada.buyPlane.bind(airCanada));

// // // Partial application

// // const addTax = (rate, value) => value + value * rate;

// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);

// // console.log(addVAT(200));

// // // const greet = function (greeting) {
// // //   return function (name) {
// // //     console.log(`${greeting} ${name}`);
// // //   };
// // // };

// // const addTaxRate = function (rate) {
// //   return function (value) {
// //     return value + value * rate;
// //   };
// // };

// // const addTax2 = addTaxRate(0.23);

// // console.log(addTax2(100));

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// // const poll = {
// //   question: 'What is your favorite programming language?',
// //   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
// //   answers: new Array(4).fill(0),
// //   //1.
// //   registerNewAnswer: function () {
// //     const answer = Number(
// //       prompt(
// //         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
// //       )
// //       );
// //       console.log(answer);

// //     if (this.answer < 0 || this.answer > this.answers.length) {
// //       console.log('invalid answer');
// //     } else {
// //       this.answers[answer]++;
// //     }

// //     this.displayResults();
// //   },
// //   displayResults: function (type = 'array') {
// //     if (type === 'array') {
// //       console.log(this.answers);
// //     } else if (type === 'string') {
// //       console.log(`Poll results are ${this.answers.join(', ')}`);
// //     }
// //   },

// // };

// // document
// //   .querySelector('.poll')
// //   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // poll.displayResults.call({answers: [5,2,3]})

// // IIFE

// // const runOnce = function () {
// //   console.log('this will never run again');
// // };

// // runOnce();

// // (function () {
// //   console.log('this will never run again');
// //   const isPrivate = 23;
// // })();

// // (() => console.log('this will also never run again'))();

// // {
// //   const isPrivate = 23
// //   var notPrivate = 46;
// // }
// // // console.log(isPrivate);
// // console.log(notPrivate);

// // CLOSURES

// // const secureBooking = function () {
// //   let passengerCount = 0;

// //   return function () {
// //     passengerCount++;
// //     console.log(`${passengerCount} passengers`);
// //   };
// // };

// // const booker = secureBooking();

// // booker();
// // booker();
// // booker();

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();
// console.dir(f);

// // timer example
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now loading all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();