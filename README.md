# Mini Web Projects

This repository contains four small web development projects. Each project is self-contained within its own folder and includes HTML, CSS, and JavaScript files.

## Projects

### 1. Calculator

A basic calculator application providing addition, subtraction, multiplication, and division functionalities. It handles decimal inputs and displays the current and previous operands. The JavaScript code utilizes a `Calculator` class for object-oriented structure, manipulating the Document Object Model (DOM) to update the display based on user input. Error handling is implemented to prevent division by zero.

-   **Technologies:** HTML, CSS, JavaScript
-   **Concepts:** Object-Oriented Programming, DOM Manipulation, Event Handling, Error Handling

### 2. Number Guessing Game

A number guessing game where the player attempts to guess a randomly generated number within a specified range (1-20). The game provides feedback indicating whether the guess is too high or too low. It tracks the player's score and highest score achieved. Input validation is implemented to handle non-numeric input.

-   **Technologies:** HTML, CSS, JavaScript
-   **Concepts:** Random Number Generation, Conditional Logic, DOM Manipulation, Event Handling, Input Validation, Local Storage (for high score persistence)

### 3. Pig Game

A two-player dice game where players take turns rolling a six-sided die to accumulate points. A player can choose to "hold" their current score, adding it to their total, or risk rolling again. Rolling a 1 results in a loss of the current turn's score. The first player to reach a target score (100) wins. The game's state (scores, active player) is managed efficiently in JavaScript.

-   **Technologies:** HTML, CSS, JavaScript
-   **Concepts:** Event Handling, DOM Manipulation, Game Logic, Random Number Generation, State Management

### 4. Tic-Tac-Toe

A classic Tic-Tac-Toe game allowing two players to input their names before starting. The game utilizes a 3x3 grid, and players alternate turns placing their marks (X or O). JavaScript handles win condition checking (rows, columns, diagonals), tie detection, and dynamically updates the game board. CSS is used for styling and the HTML structure is organized for maintainability.

-   **Technologies:** HTML, CSS, JavaScript
-   **Concepts:** DOM Manipulation, Event Handling, Game Logic (win/tie conditions), State Management, User Input Handling, CSS Styling, Modular Code Structure
