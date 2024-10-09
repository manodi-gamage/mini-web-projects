'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

// Declaring global variables
let currentScore, activePlayer, totalScore, isPlaying;

const resetGame = () => {
  // Initial values
  currentScore = 0;
  activePlayer = 0;
  totalScore = [0, 0];
  isPlaying = true;

  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;

  diceEl.classList.add('hidden');

  player0.classList.remove('player--active', 'player--winner');
  player1.classList.remove('player--active', 'player--winner');
  player0.classList.add('player--active');
};

const switchPlayer = () => {
  //switch player and reset current score
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

resetGame();

// Rolling dice button event
btnRollEl.addEventListener('click', event => {
  if (isPlaying) {
    // Random dice value
    const diceVal = Math.floor(Math.random() * 6) + 1;

    // Display dice
    diceEl.src = `dice-${diceVal}.png`;
    diceEl.classList.remove('hidden');

    if (diceVal != 1) {
      // update current score
      currentScore += diceVal;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold button event
btnHoldEl.addEventListener('click', () => {
  if (isPlaying) {
    // Add current score to total master score
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer];

    // Check if the active player has won
    if (totalScore[activePlayer] >= 100) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      isPlaying = false;
      diceEl.classList.add('hidden');
    } else {
      // Switching player
      switchPlayer();
    }
  }
});

btnNewEl.addEventListener('click', resetGame);
