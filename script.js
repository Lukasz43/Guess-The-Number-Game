// 'use strict';

// // console.log(document.querySelector('.message').textContent);

// // document.querySelector('.message').textContent = 'You win👍';

// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 633;
// console.log(document.querySelector('.guess').value);

//Added '+ 1' to avoid 0 and to be able to get 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

const startBackgroundColorVar = '#222';
const winBackgroundColorVar = '#60b347';
const loseBackgroundColorVar = 'rgb(300, 10, 50)';

// '#60b347'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there's no input
  if (!guess) {
    displayMessage('No number! ⛔');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'You are right! ✅';
    displayMessage(
      `You are right! ✅ ${highScore < score ? 'New highscore 🥇' : ''}`
    );
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor =
      winBackgroundColorVar;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').disabled = true;
    //--------------------------------------------------------------
    // highScore = highScore < score ? score : highScore;
    // document.querySelector('.highscore').textContent = highScore;
    //OR
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Guess too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 👆.' : 'Too low! 👇.');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 😥.');
      document.querySelector('body').style.backgroundColor =
        loseBackgroundColorVar;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
    }
  }
});

//Reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...'); // Starting right text
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ''; // Set input .guess value back to 0
  document.querySelector('body').style.backgroundColor =
    startBackgroundColorVar; // Change background to #222
  document.querySelector('.number').textContent = '?'; // Top question mark
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').disabled = false;
});
