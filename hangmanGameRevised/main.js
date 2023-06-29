
//SET UP
const readlineSync = require('readline-sync'); // npm package module needs to be downloaded

let words = ["rabbit", "snail", "airport", "carrots", "river", "mountain", "house", "mitten", "crown", "volleyball", "bird", "volcano", "fireman", "science", "window", "ground", "muscle",
"earth", "toothpaste", "daughter", "tongue", "popcorn", "lunch", "excercise", "carve", "stamp", "program", "haircut", "brush", "spell", "thirty", "twenty", "fourty", "fifty", 
"sixty", "seventy", "eighty", "ninety", "hundred"]

let isLetter = (input) => {
    if (input <= 0 || input > 1) {
        console.log(`${input} is not a letter. Enter a letter!`);
        return false;
    }
    else if (input.toLowerCase > 'a' && input.toLowerCase < 'z') {
        //console.log("A Letter from the alphabet")
        return true; 
    }
    else {
        log.console(input + " IS NOT A LETTER. TRY AGAIN!!!");
        return false;
    }
}

const getRandomWord = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length) // Math.random() * (max-min) + min incl min, excl max
    return words[randomIndex]
}

// let randomWord = getRandomWord(words);
// console.log(randomWord);

const generateunderscoreWord = (word) => {
    //transform the characters into underscores
    let underscoreWord = word.split('').map(char => { return '_'}) 
    return underscoreWord
}


// const generateunderscoreWord2 = (word) => { //ALTERNATIVE TO MAP
//     let underscoreWord = []
//     for(let i = 0; i <word.length; i++) {
//         underscoreWord.push('_')
//     }return underscoreWord;
// }
// let encrypted = generateunderscoreWord(randomWord);
//console.log(encrypted);

const startGame = () => {
    let randomWord = getRandomWord(words);
    let underscoreWord = generateunderscoreWord(randomWord);
    //return the word as a string
    //console.log(underscoreWord.join(' '));
}


//check whether the entered letter is in the current word
const isLetterInWord = (letter, word) => { 
    return word.includes(letter);
}

const placeMatchingLetter = (letter, randomWord,underscoreWord) => {
    for (let i = 0; i< randomWord.length; i++) {
        let currentLetter = randomWord[i]
        if (currentLetter === letter) {
            underscoreWord[i] = letter;
        }
    }
    return underscoreWord;
}

const  hasWon = (sourceWord, newWord) => {
    if (sourceWord === newWord.join('')) {
        return true;
    }
    else {
        return false;
    }

}
//console.log(placeMatchingLetter('l', 'hello', ['_', '_', '_', '_', '_']));

startGame();
let randomWord = getRandomWord(words);
let underscoreWord = generateunderscoreWord(randomWord);
//TODO rethink the number of guesses in relation to the length of the word
let guesses = Math.floor(randomWord.length / 2);
let wrongGueses = []; // to store the incorrectly guessed letters
// loop to allow several guesses

while (guesses > 0 ) { // && !(underscoreWord.join('') === randomWord)
    console.log(underscoreWord.join(' '));
    // console.log("#############################################");
    // console.log(typeof randomWord);
    // console.log(typeof underscoreWord);
    // console.log("#############################################");
    
    if (!underscoreWord.includes('_') && hasWon(randomWord, underscoreWord)) {
        console.log(`You've won!!!! The word we were looking for was ${randomWord}`);
        break;
    }
    console.log(guesses, " guesses left");
    const answer = readlineSync.question("Enter a Letter: ");
    //console.log("You entered: ", answer);
    //TODO incorporate error messages for more than 1 letter, no letter 
    //but continue running the game without removing guesses
    if (!wrongGueses.includes(answer)) {
        if(isLetterInWord(answer,randomWord)) {
            console.log(`YAY, ${answer} is in ${randomWord}`);
            //update the encrypted word by replacing the underscore at the position with the correctly guessed letter
            underscoreWord = placeMatchingLetter(answer, randomWord, underscoreWord);
        }
        else {
            wrongGueses.push(answer);
            console.log("NOT in ", randomWord);
            guesses--;
        }

    }
    else {    
        console.log(`${answer} was already guessed once. Try another letter`);
    }
}



startGame();