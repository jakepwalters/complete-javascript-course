'use strict';
//select all the elements
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display rice
  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;

  //3.check for a rolled 1: if true, switch to next player
});
