// 'use scrict';
// //function declaration

// // function calcAge1(birthYear) {
// //   return 2037 - birthYear;
// // }

// // const age1 = calcAge1(1996);
// // console.log(age1);

// // ///function expression

// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const age2 = calcAge2(1996);

// // console.log(age2);

// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // //arrow function

// // const calcAge3 = (birthYear) => 2037 - birthYear;

// // const age3 = calcAge3(1996);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //   const age = 2037 - birthYear;
// //   const retirement = 65 - age;
// //   // return retirement;
// //   return `${firstName} can retire in ${retirement} years.`;
// // };

// // console.log(yearsUntilRetirement(1996, 'Jake'));

// // function cutFruit(fruit) {
// //   return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges) {
// //   const applePieces = cutFruit(apples);
// //   const orangesPieces = cutFruit(oranges);
// //   const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
// //   return juice;
// // }

// // console.log(fruitProcessor(2, 3));

// // const calcAge = function (year) {
// //   return 2037 - year;
// // };

// // function yearsUntilRetirement(birthYear, firstName) {
// //   const age = calcAge(birthYear);
// //   const retirement = 65 - age;

// //   if (retirement > 0) {
// //     console.log(`${firstName} can retire in ${retirement} years.`);
// //     return retirement;
// //   } else {
// //     console.log(`${firstName} has already retired.`);
// //     return -1;
// //   }
// //   // return ;
// // }

// // console.log(yearsUntilRetirement(1991, 'Jake'));
// // console.log(yearsUntilRetirement(1870, 'Mike'));

// // const friends = ['Michael', 'Steven', 'Peter'];

// // //to back of array
// // friends.push('Jay');
// // console.log(friends);

// // //to front of array
// // friends.unshift('John');
// // console.log(friends);

// // //remove last element
// // friends.pop()
// // console.log(friends);

// // //remove first element
// // friends.shift()
// // console.log(friends);

// // //returns position of element
// // console.log(friends.indexOf('Steven'));

// // //returns true if element is in the array
// // console.log(friends.includes('Steven'));

// // if (friends.includes('Peter')) {
// //   console.log('You have a friend call Steven');
// // }

// // const jake = {
// //   firstName: 'Jake',
// //   lastName: 'Walters',
// //   age: 27,
// //   job: 'Web Developer',
// //   friends: ['Richard', 'Andrew', 'Rylie'],
// // };

// // console.log(jake);

// // console.log(jake.lastName);
// // //can use an expression to detemine property
// // console.log(jake['firstName']);
// // //such as
// // const nameKey = 'Name';
// // console.log(jake['first' + nameKey]);
// // console.log(jake['last' + nameKey]);

// // // const interestedIn = prompt(
// // //   'What do you want to know about Jake? Choose between firstName, lastName, age, job and friends'
// // // );

// // // if (jake[interestedIn]) {
// // //   console.log(jake[interestedIn]);
// // // } else {
// // //   console.log(
// // //     'Wrong request. Choose between firstName, lastName, age, job and friends.'
// // //   );
// // // }

// // jake.location = 'Canada'
// // jake['instagram'] = 'jakepwalters'

// // console.log(jake);

// // console.log(`Jake has ${jake.friends.length} friends, and his best friends name is ${jake.friends[0]}.`);

// const jake = {
//   firstName: 'Jake',
//   lastName: 'Walters',
//   birthYear: 1996,
//   job: 'Web Developer',
//   friends: ['Richard', 'Andrew', 'Rylie'],
//   hasDriversLicense: true,
//   // age: function () {
//   //   // console.log(this);
//   //   return 2023 - this.birthYear
//   // }
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     console.log(
//       `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${
//         this.hasDriversLicense ? 'has' : 'does not have'
//       } a drivers license.`
//     );
//   },
// };
// console.log(jake.calcAge());
// console.log(jake.age);
// console.log(jake.age);
// console.log(jake.age);

// // function getSummary () {
// //   console.log(`${jake.firstName} is a ${jake.age}-year-old ${jake.job}, and he ${jake.hasDriversLicense ? 'has' : 'does not have'} a drivers license.`);
// // }

// // getSummary();

// jake.getSummary();

//for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jakeArray = [
//   'Jake',
//   'Walters',
//   2023 - 1996,
//   'Web Developer',
//   ['Richard', 'Andrew', 'Rylie'],
//   true,
// ];

// let types = [];

// for (let i = 0; i < jakeArray.length; i++) {
//   types.push(typeof jakeArray[i]);
//   console.log(jakeArray[i]);
// }

// console.log(types);

// const years = [1988, 2983, 2023, 2222];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   let age = 2023 - years[i];
//   ages.push(age);
// }

// console.log(ages);

// //continue and break
// console.log('----ONLY STRINGS-----');

// for (let i = 0; i < jakeArray.length; i++) {
//     if(typeof jakeArray[i] !== 'string') continue;

//   console.log(jakeArray[i], typeof jakeArray[i]);
// }

// //// ----- LOOPING BACKWARDS
// const jakeArray = [
//   'Jake',
//   'Walters',
//   2023 - 1996,
//   'Web Developer',
//   ['Richard', 'Andrew', 'Rylie'],
//   true,
// ];

// for (let i = jakeArray.length - 1; i >= 0; i--) {
//   console.log(jakeArray[i]);
// }

// //// ------LOOPS IN LOOPS
// const exercises = ['Exercise 1', 'Exercise 2', 'Exercise 3'];
// for (let i = 0; i < exercises.length; i++) {
//   console.log(exercises[i]);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`Repetition ${j}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6) + 1
// }

// console.log(dice);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// // console.log('-----TIPS-----');
// console.log(tips);
// // console.log('-----TOTALS-----');
// console.log(totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// }

// console.log(calcAverage(totals));
