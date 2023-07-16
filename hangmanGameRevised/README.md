
//TODO use markup to format
Hangman reinterpreted
This is the README file for the Hangman reinterpreted code. The code is an HTML file that includes JavaScript and CSS code to create a Hangman game with a graphical user interface.

Table of Contents
Description
Setup
Game Instructions
HTML Structure
CSS Styles
JavaScript Logic
Description
The Hangman reinterpreted code is a web-based version of the classic Hangman game. It allows players to guess a secret word by selecting letters from the alphabet. The game features a graphical representation of a house that progressively disintegrates as the player makes wrong guesses. The player has a limited number of tries to guess the word before the house fully disintegrates.

Setup
To run the Hangman reinterpreted game, follow these steps:

Copy the provided code into an HTML file.
Save the HTML file with a .html extension.
Make sure the HTML file and the required assets (such as images and stylesheets) are in the same directory.
Open the HTML file in a web browser.
Game Instructions
When the game starts, you will see a prompt to select a category that corresponds to a specific programming topic (HTML, CSS, or JavaScript).
Click on a category button to choose a category.
Once a category is selected, the game will generate a secret word from that category.
The secret word will be displayed as a series of underscores representing the hidden letters.
Click on the letter buttons to make your guesses.
If the guessed letter is correct, the corresponding underscore(s) in the secret word will be revealed.
If the guessed letter is incorrect, the house will progressively disintegrate, and you will have a limited number of tries to guess the word before the game ends.
Continue guessing letters until you either reveal the entire word or make too many incorrect guesses.
If you reveal the entire word, you win the game.
If you make too many incorrect guesses, you lose the game.
After the game ends, you can start a new game by clicking the "New Game" button.
HTML Structure
The HTML code consists of the following main elements:

<html>: The root element of the HTML document.
<head>: Contains metadata and links to external resources.
<body>: The main content of the page.
<div class="drawing-container">: Container for the graphical representation of the house.
<div class="container" id="quiz-aria">: Container for the game elements, including categories, letter buttons, and the new game popup.
<button id="review-instructions-button">: Button to open the game instructions modal.
<div id="manual-container">: Container for the game instructions modal.
<script src="setup.js"></script>: JavaScript code for the game logic.
CSS Styles
The CSS code provides styling for the Hangman game elements. It includes styles for the house, roof, doors, windows, buttons, and other visual components. The styles define the appearance and positioning of the elements to create the graphical representation of the game.

JavaScript Logic
The JavaScript code handles the game logic and interaction. It includes functions for displaying categories, generating a random word, encrypting the word with underscores, handling user guesses, updating the graphical representation of the house, checking for game win or loss conditions, and starting a new game. The code also includes event listeners for button clicks and functions for displaying game instructions and navigating through instruction slides.

Please note that the provided code is just a snippet, and additional code may be required to make the game fully functional.

Enjoy playing Hangman reinterpreted!