// // // // 'use strict';

// // // // // Data needed for a later exercise
// // // // const flights =
// // // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // // // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(orderSet);
console.log(new Set('jonas'));

const rest = new Map();
rest.set('name', 'new resturant')
rest.set(1, 'north milton')
rest.set(2, 'charlottetown')
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// // for (const item of menu.entries()) {
// //   console.log(item);
// // }
// // // // //REST

// // // // // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // // // // console.log(a, b, others);

// // // // //SPEAD OPERATOR
// // // // // const arr = [7, 8, 9];
// // // // // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // // // // console.log(badNewArr);

// // // // // const newArr = [1, 2, ...arr];
// // // // // console.log(newArr);

// // // // // console.log(...newArr);

// // // // // const newMenu = [...restaurant.mainMenu, 'new Item'];
// // // // // console.log(newMenu);

// // // // // // soft copy array
// // // // // const mainMenuCopy = [...restaurant.mainMenu];

// // // // // //join 2 arrays
// // // // // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // // // // console.log(menu);

// // // // // const str = 'Jake';
// // // // // const letters = [...str, '', 'S.'];
// // // // // console.log(letters);

// // // // // const ingredients = [
// // // // //   prompt("Let's make Pasta! Ingredident1?"),
// // // // //   prompt('Ingredident2?'),
// // // // //   prompt('Ingredident3?'),
// // // // // ];

// // // // // console.log(ingredients);

// // // // // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // // // // restaurant.orderPasta(...ingredients);

// // // // const newRestaurant = { ...restaurant, founder: 'Jake', foundedIn: '1996' };

// // // // console.log(newRestaurant);

// // // // // restaurant.orderDelivery({
// // // // //   time: '22:30',
// // // // //   address: '646 Crabbe Rd',
// // // // //   mainIndex: 2,
// // // // //   starterIndex: 2,
// // // // // });

// // // // // ///////////////
// // // // // //DESTRUCTURING OBJECTS

// // // // // const { name, openingHours, categories } = restaurant;

// // // // // console.log(name, openingHours, categories);

// // // // // const {
// // // // //   name: restaurantName,
// // // // //   openingHours: hours,
// // // // //   categories: tags,
// // // // // } = restaurant;

// // // // // console.log(restaurantName, hours, tags);

// // // // // const { menu = [], starterMenu: starters = [] } = restaurant;

// // // // // console.log(menu, starters);

// // // // // let a = 111;
// // // // // let b = 222;
// // // // // const obj = { a: 23, b: 7, c: 14 };

// // // // // ({ a, b } = obj);

// // // // // //nested objects

// // // // // const {
// // // // //   fri: { open, close },
// // // // // } = openingHours;
// // // // // console.log(open, close);

// // // // ///////////////
// // // // //DESTRUCTURING ARRAYS

// // // // // const arr = [1, 2, 3];
// // // // // const a = arr[0];
// // // // // const b = arr[1];
// // // // // const c = arr[3];

// // // // // const [x, y, z] = arr;
// // // // // console.log(x, y, z);

// // // // // let [main, , secondary] = restaurant.categories;
// // // // // console.log(main, secondary);

// // // // // // const temp = main;
// // // // // // main = secondary;
// // // // // // secondary = temp;

// // // // // // console.log(main, secondary);

// // // // // [main, secondary] = [secondary, main];

// // // // // console.log(main, secondary);

// // // // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // // // console.log(starter, mainCourse);

// // // // // const nested = [2, 4, [5, 6]];

// // // // // // const [i, , j] = nested;

// // // // // // console.log(i, j);

// // // // // const [i, , [j, k]] = nested;

// // // // // console.log(i, j, k);

// // // const game = {
// // //   team1: 'Bayern Munich',
// // //   team2: 'Borrussia Dortmund',
// // //   players: [
// // //     [
// // //       'Neuer',
// // //       'Pavard',
// // //       'Martinez',
// // //       'Alaba',
// // //       'Davies',
// // //       'Kimmich',
// // //       'Goretzka',
// // //       'Coman',
// // //       'Muller',
// // //       'Gnarby',
// // //       'Lewandowski',
// // //     ],
// // //     [
// // //       'Burki',
// // //       'Schulz',
// // //       'Hummels',
// // //       'Akanji',
// // //       'Hakimi',
// // //       'Weigl',
// // //       'Witsel',
// // //       'Hazard',
// // //       'Brandt',
// // //       'Sancho',
// // //       'Gotze',
// // //     ],
// // //   ],
// // //   score: '4:0',
// // //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// // //   date: 'Nov 9th, 2037',
// // //   odds: {
// // //     team1: 1.33,
// // //     x: 3.25,
// // //     team2: 6.5,
// // //   },
// // // };

// // // //
// // // // We're building a football betting app (soccer for my American friends 😅)!

// // // // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// // // // 1. Create one player array for each team (variables 'players1' and 'players2')

// // // const [players1, players2] = game.players;
// // // console.log('---players1, players2----');
// // // console.log(players1, players2);

// // // // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// // // const [gk, ...fieldPlayers] = players1;
// // // console.log('---gk, fieldplayers----');
// // // console.log(gk, fieldPlayers);

// // // // 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// // // const allPlayers = [...players1, ...players2];
// // // console.log('----all players----');
// // // console.log(allPlayers);

// // // // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // // console.log('----players1Final----');
// // // console.log(players1Final);

// // // // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // // const { team1, x: draw, team2 } = game.odds;
// // // console.log('-----ODDS-----');
// // // console.log(team1, draw, team2);

// // // // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// // // const printGoals = function (...playerNames) {
// // //   console.log(playerNames);
// // //   console.log(`${playerNames.length} goals were scored`);
// // // };

// // // printGoals(game.scored);

// // // // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // // team1 < team2 && console.log(`Team 1 is more likely to win`);
// // // team2 < team1 && console.log(`Team 2 is more likely to win`);

// // // // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // // // GOOD LUCK 😀
// // // //

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// ///////////////////////////////////////
// // Coding Challenge #2

// // Let's continue with our football betting app!

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i}: ${player}`);

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let totalOdds = 0;
// let totalKeys = 0;
// for (const odd of Object.values(game.odds)) {
//   totalKeys++;
//   totalOdds += odd;
// }

// const avgOdd = totalOdds / totalKeys;
// console.log(`The average odds is ${avgOdd}`);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// for (const [team, odd] of Object.entries(game.odds)) {
//   let teamStr = '';
//   if (team === 'x') {
//     teamStr = 'draw';
//   } else {
//     teamStr = `victory ${game[team]}`;
//   }
//   console.log(`Odd of ${teamStr}: ${odd}.`);
// }

// // for (const [team, odd] of Object.entries(game.odds)) {
// //   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// //   console.log(`Odd of ${teamStr} ${odd}`);
// // }

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }

// const scorers = {};

// for (let i = 0; i < game.scored.length; i++) {
//   const player = game.scored[i];
//   if (scorers[player]) {
//     scorers[player]++;
//   } else {
//     scorers[player] = 1;
//   }
// }

// console.log(scorers);

// // GOOD LUCK 😀


