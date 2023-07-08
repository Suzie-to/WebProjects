
//******************************************************SET UP**************************************

const cssProperties = [
    'COLOR',
    'FONT-SIZE',
    'MARGIN',
    'PADDING',
    'BACKGROUND-COLOR',
    'BORDER',
    'DISPLAY',
    'POSITION',
    'WIDTH',
    'HEIGHT'
  ];

  const jsFunctions = [
    'GETELEMENTBYID',
    'ADDEVENTLISTENER',
    'QUERYSELECTOR',
    'CREATEELEMENT',
    'INNERHTML',
    'APPENDCHILD',
    'CONSOLE.LOG',
    'SETTIMEOUT',
    'PARSEINT',
    'JSON.STRINGIFY'
  ];

  const htmlTags = [
    'DOCTYPE',
    'HTML',
    'HEAD',
    'BODY',
    'ARTICLE',
    'SECTION',
    'HEADER',
    'NAV',
    'ASIDE',
    'FOOTER',
    'MAIN',
    'DIV',
    'SPAN',
    'IMG',
    'TABLE',
    'FORM',
    'INPUT',
    'BUTTON',
    'TEXTAREA',
    'SELECT',
    'OPTION',
    'LABEL',
    'IFRAME',
    'LINK',
    'SCRIPT',
    'STYLE',
    'META'
  ];
let words = [cssProperties, jsFunctions, htmlTags];

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

const startGame = () => {
    // let playerName = readlineSync.question("Enter your name: ");
    // ranking.push({ name: playerName, score: 0 });
    let randomWord = getRandomWord(words);
    let underscoreWord = generateunderscoreWord(randomWord);
    //console.log(underscoreWord.join(' '));
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

module.exports= {isLetterInWord, placeMatchingLetter, hasWon};