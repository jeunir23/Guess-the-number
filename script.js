'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No number input
  if (!guess) {
    document.querySelector('.message').textContent = 'No input number 🥹';
  }

  // When guess is wrong
  else if ((guess = !secretNumber)) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high 📈' : 'Too low 📉';
  }
});
