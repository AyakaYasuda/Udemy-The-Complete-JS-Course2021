'use strict';

/*
1.define a secet number
2.implement what happens when the guess is correct
3.implement what happens whrn the guess is lower/higher
*/

// define variable called secret number and assign a random number to it
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define the initial score
let score = 20;
let highscore = 0;

// eliminate the duplicated code to make it clear
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// create the event where you store the input number in the guess variable and print the message aside
// compare the secret number and the input number
// implement to get the score to go down (decrease) each time you make a wrong guess
// implement what happens when you lose the game (when the score reaches to zero)
// create variable called highscore and store current score if it's greater than the previous highscore
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no number
  if (!guess) {
     displayMessage('⛔️  No Number!');

    // when a player win
  } else if (guess === secretNumber) {
    displayMessage('🎉  Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈  Too high!' : '📉  Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥  You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈  Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥  You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉  Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥  You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

/*
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
