
//SET UP
const readlineSync = require('readline-sync'); // npm package module needs to be downloaded

let words = ["rabbit", "snail", "airport", "carrots", "river", "mountain", "house", "mitten", "crown", "volleyball", "bird", "volcano", "fireman", "science", "window", "ground", "muscle",
"earth", "toothpaste", "daughter", "tongue", "popcorn", "lunch", "excercise", "carve", "stamp", "program", "haircut", "brush", "spell", "thirty", "twenty", "fourty", "fifty", 
"sixty", "seventy", "eighty", "ninety", "hundred"]

const getRandomWord = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length) // Math.random() * (max-min) + min incl min, excl max
    return words[randomIndex]
}

// let randomWord = getRandomWord(words);
// console.log(randomWord);

const generateHiddenWord = (word) => {
    //transform the characters into underscores
    let hiddenWord = word.split('').map(char => { return '_'}) 
    return hiddenWord
}


// const generateHiddenWord2 = (word) => { //ALTERNATIVE TO MAP
//     let hiddenWord = []
//     for(let i = 0; i <word.length; i++) {
//         hiddenWord.push('_')
//     }return hiddenWord;
// }
// let encrypted = generateHiddenWord(randomWord);
//console.log(encrypted);

const startGame = () => {
    let randomWord = getRandomWord(words);
    let encrypted = generateHiddenWord(randomWord);
    //return the word as a string
    console.log(encrypted.join(' '));
}

startGame();
const answer = readlineSync.question("Enter a Letter: ");
