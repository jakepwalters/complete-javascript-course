'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
//to make it easier to test winning'
console.log(number);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when player doesn't enter a number
  if (!guess) {
    displayMessage('Enter a Number!');

    //when player wins
  } else if (guess === number) {
    displayMessage('Correct! Good Guess');
    

    //change CSS properties
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //show player the number after they've guess it correctly
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    };

    //when guess is wrong
   } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  
  }
});

//player clicks 'Again'

document.querySelector('.again').addEventListener('click', function () {
  //restore variables to initial values
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  score = 20;

  //restore all DOM props to initial values
  displayMessage('Start guessing...')
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  //restore css props
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
