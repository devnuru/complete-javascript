'use strict';

// const msg = document.querySelector('.message');

// console.log(msg.textContent);

// document.querySelector('.message').textContent = '🦀Correct Number!';

// console.log(msg.textContent);

// What is DOM?
// DOM is Document Object Model
// DOM is a programming interface for web documents
// DOM represents the structure of a document as a tree of objects
// DOM allows programming languages to manipulate the structure, style, and content of web documents
// DOM is a language-neutral interface
// DOM is a platform-neutral interface
// DOM is a standard interface
// DOM is a W3C standard
// DOM is a W3C recommendation
// DOM is a W3C specification

// So we can say that DOM is basically a connection point between HTML documents and JavaScript code.

// DOM !== JAVASCRIPT;

// DOM methods and Properties for DOM Manipulation
// DOM is not Part of JavaScript

// DOM is part of Web APIs
// the DOM and DOM methods are actually part of something called the web APIs.

// Web APIs are provided by the browser

// document. querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);

// Event Handling

// Event Handling is a way to execute a function when an event occurs

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');

    // When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✅ Correct Number';
    displayMessage('✅ Correct Number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When Guess is Wrong/ Different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 To High' : '📉 To Low';

      displayMessage(guess > secretNumber ? '📈 To High' : '📉 To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😾 You lost the game';

      displayMessage('😾 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // When guess too High
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       guess > secretNumber ? '📈 To High' : '📉 To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😾 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😾 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
