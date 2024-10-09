const gameReset = () => {
    gameOver = false;
    isTie = false;
    board = ["", "", "", "", "", "", "", "", ""];
    activePlayer = 0;

    gameOverMessageElement.classList.add("hidden");
    gameBoardCellElements.forEach((event) => {
        event.classList.remove("disabled");
        event.classList.remove("click-disabled");
        event.textContent = "";
    });
};

const startGame = () => {
    gameReset();
    if (!players[0].name || !players[1].name) {
        alert("You need set player names to start the game");
        return;
    }
    gameBoardContainerElement.classList.remove("hidden");
    activePlayerNameElement.textContent = players[activePlayer].name;
};

const selectCell = (event) => {
    if (!event.target.classList.contains("disabled") && !gameOver) {
        currentSymbol = players[activePlayer].symbol;
        event.target.textContent = currentSymbol;
        event.target.classList.add("disabled");

        boardCellNumber = event.target.id;
        board[boardCellNumber] = currentSymbol;

        determineWinner();
        if (gameOver) {
            displayGameOverMessage();
            gameBoardCellElements.forEach((element) => {
                if (!element.classList.contains("disabled")) {
                    element.classList.add("click-disabled");
                }
            });
        } else {
            switchPlayer();
        }
    }
};

const switchPlayer = () => {
    if (activePlayer == 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
};

const haveBoardSpace = () => {
    return board.some((value) => {
        return !value;
    });
};

const determineWinner = () => {
    winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    currentSymbol = players[activePlayer].symbol;
    for (const combo of winningCombinations) {
        if (board[combo[0]] == currentSymbol && board[combo[1]] == currentSymbol && board[combo[2]] == currentSymbol) {
            winner = activePlayer;
            gameOver = true;
        }
    }

    if (!haveBoardSpace()) {
        gameOver = true;
        isTie = true;
        return;
    }
};

const displayGameOverMessage = () => {
    gameOverMessageElement.classList.remove("hidden");
    if (winner == 0 || winner == 1) {
        winnerName = players[winner].name;
        gameOverMessageElement.querySelector(".winner-name").textContent = winnerName;
    } else {
        gameOverMessageElement.querySelector("h2").textContent = "Tie";
    }
};
