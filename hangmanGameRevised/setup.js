
//******************************************************SET UP**************************************
const readlineSync = require('readline-sync'); // console display
const validateInput = require('./validateInput');
//const ranking = require('./ranking');



//TODO Replace array with a directory
let words = ["rabbit", "snail", "airport", "carrots", "river", "mountain", "house", "mitten", "crown", "volleyball", "bird", "volcano", "fireman", "science", "window", "ground", "muscle",
"earth", "toothpaste", "daughter", "tongue", "popcorn", "lunch", "excercise", "carve", "stamp", "program", "haircut", "brush", "spell", "thirty", "twenty", "fourty", "fifty", 
"sixty", "seventy", "eighty", "ninety", "hundred"]

// return a random word from the list
const getRandomWord = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length) // Math.random() * (max-min) + min incl min, excl max
    return words[randomIndex]
}

// let randomWord = getRandomWord(words);
// console.log(randomWord);

// return the word as a string of underscores
const generateunderscoreWord = (word) => {
    //transform the characters into underscores
    let underscoreWord = word.split('').map(char => { return '_'}) 
    return underscoreWord;
}
// const generateunderscoreWord2 = (word) => {
//     let underscoreWord = []
//     for(let i = 0; i <word.length; i++) {
//         underscoreWord.push('_')
//     }return underscoreWord;
// }
// let encrypted = generateunderscoreWord(randomWord);
//console.log(encrypted);

// const startGame = () => {
//     // let playerName = readlineSync.question("Enter your name: ");
//     // ranking.push({ name: playerName, score: 0 });
//     let randomWord = getRandomWord(words);
//     let underscoreWord = generateunderscoreWord(randomWord);
//     //console.log(underscoreWord.join(' '));
// }


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

module.exports= {isLetterInWord, placeMatchingLetter, hasWon};