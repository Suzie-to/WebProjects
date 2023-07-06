const readlineSync = require('readline-sync'); // console display
const validateInput = require('./validateInput'); // validation
const setUp = require('./setup.js');
//const ranking = require('./ranking');

//TODO Replace array with a directory or add more lists
let words = ["rabbit", "snail", "airport", "carrots", "river", "mountain", "house", "mitten", "crown", "volleyball", "bird", "volcano", "fireman", "science", "window", "ground", "muscle",
"earth", "toothpaste", "daughter", "tongue", "popcorn", "lunch", "excercise", "carve", "stamp", "program", "haircut", "brush", "spell", "thirty", "twenty", "fourty", "fifty", 
"sixty", "seventy", "eighty", "ninety", "hundred"]

// return a random word from the list
const getRandomWord = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length) // Math.random() * (max-min) + min incl min, excl max
    return words[randomIndex]
}

// return the word as a string of underscores
const generateunderscoreWord = (word) => {
    let underscoreWord = word.split('').map(char => { return '_'}) 
    return underscoreWord;
}

const startGame = () => {
    let randomWord = getRandomWord(words);
    let underscoreWord = generateunderscoreWord(randomWord);
}

//check whether the entered letter is in the current word
const isLetterInWord = (letter, word) => { 
    return word.includes(letter);
}

// place the correctly guessed letter in the correct position
const placeMatchingLetter = (letter, randomWord,underscoreWord) => {
    for (let i = 0; i< randomWord.length; i++) {
        let currentLetter = randomWord[i]
        if (currentLetter === letter) {
            underscoreWord[i] = letter;
        }
    }
    return underscoreWord;
}

// check whether the player has won
const  hasWon = (sourceWord, newWord) => {
    if (sourceWord === newWord.join('')) {
        return true;
    }
    else {
        return false;
    }
}
//**************************GAME LOOP*****************************************************************
startGame();
let randomWord = getRandomWord(words);
let underscoreWord = generateunderscoreWord(randomWord);
//TODO rethink the number of guesses in relation to the length of the word
let guesses = Math.floor(randomWord.length / 2);
let wrongGueses = []; // to store the incorrectly guessed letters

// loop to allow several guesses
while (guesses > 0 ) {
    console.log(underscoreWord.join(' '));
    
    // check whether  the player has won
    if (hasWon(randomWord, underscoreWord)) {
        console.log(`You've won!!!! The password ${randomWord}`);
        break;
    }
    // else if (guesses == 0 && underscoreWord.includes('_') && hasWon(!randomWord, underscoreWord)) {
    //     console.log(`You've lost!!!! The word we were looking for was ${randomWord}`);
    //     break;
    // }
    console.log(guesses, " guesses left");

    let answer = readlineSync.question("Enter a Letter: "); 
    // validate the input (a single letter only)
    answer = validateInput.isLetter(answer);


    if (!wrongGueses.includes(answer)) {
        if(isLetterInWord(answer,randomWord)) {
            // console.log(`YAY, ${answer} is in ${randomWord}`);
            //update the encrypted word by replacing the underscore at the position with the correctly guessed letter
            underscoreWord = placeMatchingLetter(answer, randomWord, underscoreWord);
        }
        else {
            // verify the answer agains the wrong guesses
            wrongGueses.push(answer);
            console.log(answer, " is NOT in ", randomWord);
            guesses--;

            // display lost message for the looser if he ran out of guesses
            if (guesses == 0 && !hasWon(randomWord, underscoreWord)) {
                    console.log("YOU'VE LOST!");
                    //displayRanking();
                }
            //TODO Prompt user to play again? generate a new word?
            }
        }

    else {    
        console.log(`${answer} was already guessed once. Try another letter`);
    }
}


startGame();

