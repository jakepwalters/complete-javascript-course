'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = account => {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const displaySummary = account => {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (acct) {
  acct.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    //force inputs to lose focus
    inputLoginPin.blur();

    //updateUI
    updateUI(currentAccount);
  }
});

const updateUI = account => {
  //display movements
  displayMovements(account.movements);
  //display balance
  displayBalance(account);
  //display summary
  displaySummary(account);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  //clear inputs
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    //complete transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// //SPLICE

// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);

// //REVERSE

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['d', 'f', 'g', 'h', 'j'];

// console.log(arr2.reverse());
// console.log(arr2);

// //CONCATE

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN

// console.log(letters.join(' - '));

// AT

// const arr = [23, 11, 64];

// console.log(arr.at(0));

// //getting the last element
// console.log(arr.at(arr.length - 1));
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jake'.at(0));

// /// FOR EACH

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-----forEACH');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States Dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound Sterling'],
// ]);

// currencies.forEach(function (val, key, map) {
//   console.log(`${key}, ${val}`);
// });

// //set

// const currenciesUnique = new Set(['USD', 'GBP', 'CAD', 'USD', 'GBP']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (val, key, set) {
//   console.log(`${key}, ${val}`);
// });

/// test 1: julia [3, 5, 2, 12, 7], kate [4, 1, 15, 8, 3]
/// test 2: julia [9, 16, 6, 8, 3], kate [10, 5, 6, 1, 4]

// const julia1 = [3, 5, 2, 12, 7];
// const kate1 = [4, 1, 15, 8, 3];
// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (julia, kate) {
//   let juliaFinal = [...julia];
//   juliaFinal.splice(-2);

//   const allDogs = [...juliaFinal, ...kate];

//   allDogs.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is a puppy, and is ${age} years old`);
//     }
//   });
// };

// checkDogs(julia1, kate1);
// checkDogs(julia2, kate2);

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }

// console.log(movementsUSDfor);

// //bad readability but what he is going to use
// const movementsUSDarw = movements.map(mov => mov * eurToUsd);
// //I prefer this: or regular function syntax
// //const movementsUSDarw = movements.map(mov => {return mov * eurToUSD})
// console.log(movementsUSDarw);

// // console.log('-----forEACH');
// // movements.forEach(function (movement, i, arr) {
// //   if (movement > 0) {
// //     console.log(`Movement ${i + 1}: You deposited ${movement}`);
// //   } else {
// //     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// //   }
// // });

// const movementDescription = movements.map(
//   (movement, i) =>
//     `Movement ${i + 1}: You ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       movement
//     )}`
// );

// console.log(movementDescription);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposits);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawals);

// const balance = movements.reduce(function (accum, cur, i, arr) {
//   return accum + cur;
// }, 0);

// const balance = movements.reduce((accum, cur) => accum + cur, 0);

// // console.log(balance);

// //maximum value

// // const max = movements.reduce((acc, mov) => {
// //   if (acc > mov) {
// //     return acc;
// //   } else {
// //     return mov;
// //   }
// // }, movements[0]);

// const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov));

// console.log(max);

// test data

const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];

//
// const calcHumanAge = test1.map(function (dogAge) {
//   if (dogAge <= 2) return dogAge * 2;
//   else return 16 + dogAge * 4;
// });

// const calcHumanAge = function (arr) {
//   const humanAges = arr
//     .map(function (dogAge) {
//       if (dogAge <= 2) return dogAge * 2;
//       else return 16 + dogAge * 4;
//     })
//     .filter(function (dogAgeHuman) {
//       return dogAgeHuman >= 18;
//     });
//   return humanAges;
// // };

const calcHumanAge2 = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(dogHumanAge => dogHumanAge >= 18)
    .reduce((acc, dogHumanAge, i, arr) => acc + dogHumanAge / arr.length, 0);

// const avg = humanAges.reduce((acc, age) => acc + age, 0) / humanAges.length;

// // console.log(calcHumanAge(test1));

// // console.log(calcHumanAge2);
// console.log(calcHumanAge2(test1));
// console.log(calcHumanAge2(test2));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUSD = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUSD)
//   // .map((mov, i, arr) => {
//   //   console.log(arr);
//   //   return mov * eurToUSD;
//   // })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);
