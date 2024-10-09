let selectedPlayerId;
let players = [
    { name: "", symbol: "X" },
    { name: "", symbol: "O" },
];

let gameOver, isTie, winner, board, activePlayer;

// Selecting buttons
const editPlayerBtnElement = document.querySelectorAll("#player-edit-btn");
const cancelEditBtnElement = document.querySelector("#cancel-btn");
const confirmEditBtnElement = document.querySelector("#confirm-btn");
const newGameBtnElement = document.querySelector("#new-game-btn");

// Selecting other elements
const backdropElement = document.querySelector(".backdrop");
const playerConfigModalElement = document.querySelector(".overlay-name-config");
const formElement = document.querySelector(".overlay-name-config form");
const gameBoardContainerElement = document.querySelector(".game-board-container");
const activePlayerNameElement = document.querySelector(".active-player");
const gameOverMessageElement = document.querySelector(".game-over");

const gameBoardCellElements = document.querySelectorAll(".game-board li");

// Reset
classReset();
gameReset();

// Events
editPlayerBtnElement.forEach((element) => {
    element.addEventListener("click", openPlayerConfig);
});

cancelEditBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", confirmEdit);
newGameBtnElement.addEventListener("click", startGame);

for (const element of gameBoardCellElements) {
    element.addEventListener("click", selectCell);
}
