'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`)

// // const interface = `Audio`

// // const private = 8;

// function logger() {
//     console.log(`My name is Jake`);
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);

// console.log(appleJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1991);
// console.log(age2);

//arrow function

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const retireYears = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 55 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(retireYears(1996, 'Jake'));

// const jake = {
//     firstName: `Jake`,
//     lastName: `Walters`,
//     age: 26,
//     job: `Solutions Engineer`,
//     friends: [`Richard`, `Rylie`, `Andrew`]
// }

// console.log(jake)
// console.log(jake.friends);

// // const interestedIn = prompt(`What do you want to know about Jake? Choose between firstName, lastName, age, job, or friends.`)

// // if (jake[interestedIn]) {
// //     console.log(jake[interestedIn]);
// // } else {
// //     console.log(`Wrong request. Choose between firstName, lastName, age, job, or friends.`)
// // }

// jake.location = `Charlottetown`

// console.log(jake)

// //Challenge

// // `Jake has 3 friends, and his best friend is named Richard`

// console.log(`Jake has ${jake.friends.length} friends, and his best friend is named ${jake.friends[0]}.`)

// const jake = {
//     firstName: `Jake`,
//     lastName: `Walters`,
//     birthYear: 1996,
//     job: `Solutions Engineer`,
//     friends: [`Richard`, `Rylie`, `Andrew`],
//     hasDriversLicense: true,
//     // calcAge: function (birthYear) {
//     //     return 2023 - birthYear;
//     // }
//     // calcAge: function () {
//     //     console.log(this)
//     //     return 2023 - this.birthYear
//     // }
//     calcAge: function () {
//         this.age = 2023 - this.birthYear
//         return this.age
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'has a' : 'does not have a'} drivers license`
//     }
// }

// console.log(jake.calcAge())

// console.log(jake.getSummary())

// const mark = {
//     firstName: `Mark`,
//     lastName: `Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass / this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: `John`,
//     lastName: `Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = (this.mass / this.height ** 2);
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi}).`)
// } else {
//     console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi}).`)
// }

// for(let rep = 1; rep <= 10; rep ++) {
//     console.log(`lifting weights repetition ${rep}`);
// }

// const jakeArray = ['Jake', 'Walters', 2023-1996, 'Solutions Engineer', ['Rich', 'Ry', 'Murph'], true];
// const arrayTypes = [];

// // for (let i = 0; i <= jakeArray.length - 1; i++) {
// //     console.log(jakeArray[i])

// //     //filling the array
// //     // arrayTypes[i] = typeof jakeArray[i]
// //     arrayTypes.push(typeof jakeArray[i])
// // }

// // console.log(arrayTypes)

// // const years = [1991, 2007, 1969, 1932];

// // const ages = [];

// // for (let i = 0; i < years.length; i++) {
// //     ages.push(2023 - years[i]);
// // }

// // console.log(ages);

// // continue and break
// for (let i = 0; i <= jakeArray.length - 1; i++) {
//     if (typeof jakeArray[i] !== 'string') continue;

//     console.log(jakeArray[i], typeof jakeArray[i])
// }

//backwards looping

// const jakeArray = ['Jake', 'Walters', 2023-1996, 'Solutions Engineer', ['Rich', 'Ry', 'Murph']];

// for (let i = jakeArray.length - 1; i >=0; i--) {
//     console.log(i, jakeArray[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-----starting exercise ${exercise}-----`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`lifting weights repetition ${rep}.`)
//     }
// }

//while loop

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-----starting exercise ${exercise}-----`);

//     let rep = 1;
//     while (rep <= 5) {
//         console.log(`lifting weights repetition ${rep}.`)
//         rep++;
//     }
// }

// let rep = 1;
// while (rep <= 5) {
//     console.log(`lifting weights repetition ${rep}.`)
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6) {
//         console.log('WOOHOO')
//     }
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//loop through each bill in the bills array
for (let i = 0; i <= bills.length - 1; i++) {
  //calc tip for each bill
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));

// console.log(bill);