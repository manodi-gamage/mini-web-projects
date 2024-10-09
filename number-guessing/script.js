"use strict";

const setMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const getRandom = function () {
    return Math.floor(Math.random() * 20) + 1;
};

let secretNumber = getRandom();
let score = 20;
let highscore = 0;

document.querySelector(".btn-check").addEventListener("click", function () {
    const userInput = Number(document.querySelector("input").value);

    // when the input is empty
    if (score > 0) {
        if (!userInput) {
            setMessage("Enter a number!");
            document.querySelector(".message").style.color = "#F94C66";
        } else {
            // when the guess is right i.e: win
            if (userInput === secretNumber) {
                setMessage("You guessed it right!!! ");
                document.querySelector(".message").style.color = "#3EC70B";
                document.querySelector(".message").style.fontWeight = "bold";
                document.querySelector(".secret-number").textContent = secretNumber;

                if (score > highscore) {
                    highscore = score;
                    document.querySelector(".high-score-number").textContent = highscore;
                }
            } else {
                // when the guess is wrong
                const message = userInput < secretNumber ? "Too low" : "Too high";
                setMessage(message);
                score--;
                document.querySelector(".score-number").textContent = score;
            }
        }
    } else {
        //when the user runs out of guesses i.e when score is 0
        setMessage("You lost..!");
        document.querySelector(".message").style.color = "#F94C66";
        document.querySelector(".message").style.fontWeight = "bold";
    }
});

document.querySelector(".btn-again").addEventListener("click", function () {
    score = 20;
    secretNumber = getRandom();
    setMessage("Start guessing...");
    document.querySelector(".secret-number").textContent = "?";
    document.querySelector(".score-number").textContent = 20;
    document.querySelector("input").value = "";
});
