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

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const retireYears = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 55 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(retireYears(1996, 'Jake'));