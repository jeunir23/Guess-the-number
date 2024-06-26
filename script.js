'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // No number input
  if (!guess) {
    displayMessage('No input number 🥹');
  }

  // When guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high 📈' : 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 😭');
      document.querySelector('.score').textContent = 0;
    }

    // When you guess the correct number
  } else if (guess === secretNumber) {
    displayMessage('Correct ✅');
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});

document.querySelector('.button').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#d3d3d3';
  displayMessage('Start guessing...');
});
