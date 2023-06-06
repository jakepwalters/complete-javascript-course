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