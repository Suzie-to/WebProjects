
//******************************************************SET UP**************************************
const userInput = document.getElementById("user-input");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const endGameText = document.getElementById("end-game-text")
const categoriesContainer = document.getElementById("categories-container");

const categories = {
    cssProperties : [
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
  ],

jsFunctions : [
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
  ],

 htmlTags : [
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
  ]
};

//TODO fix the display of categories
//display a button for each category 
const displayCategories = () => {
    categoriesContainer.innerHTML += `<h3>What's your expertise?</h3>`;
    //create a button 
    let buttonContainer = document.createElement("div");
    
    //generate a button for each category
    for(let category in categories) {
        buttonContainer.innerHTML += `<button class="categories" onclick="displayWord('${category}')" >${category}</button>`
    }

    categoriesContainer.appendChild(buttonContainer);
};

//diable a button that has been ckilcked already
const blocker = () => {
    let categoryButtons = document.querySelectorAll(".categories");
    let letterButtons = document.querySelectorAll(".letters");

    //disable all options
    categoryButtons.forEach((button) => {
        button.disabled = true;
    });
    //disable all letterscategory
    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    //remove class hide from the container????
    newGameContainer.classList.remove("hide");
};


// SELECT A CATEGORY
//return a random word from the catgeory array display it encrypted
let displayWord = (categoryName) => {
    let categoryButtons = document.querySelectorAll(".categories");

    //convert the node list into an array to access the elements
    Array.from(categoryButtons).array.forEach(button => {
        //compare each element value(category) with the value(category) of the button innerText
        if(button.innerText === categoryName) {
            //finally highlight the button and activate it
            button.classList.add('active');
        }
        // disable all non-active buttons
        else {
            button.disables = true;
        }
        
    });

    //reveal the letters that we hidden initially
    letterContainer.classList.remove('hide')
    // set the initial user input to null
    userInput.innerText = "";

//TODO move to separate function
    //GENERATE A RANDOM WORD
    let categoryArray = categories[categoryName];
    //genereate a random index : Math.random() * (max-min) + min incl min, excl max
    let randomIndex = Math.floor(Math.random() * categoryArray.length);
    randomWord = categoryArray[randomIndex];
    console.log(`PASSWORD = ${randomWord}`);


    //REPLACE EACH CHARACTER WITH AN UNDERSCORE
    //let maskedWord = randomWord.split('').map(() => '<span class="dashes">_</span>').join('');
    let maskedWord = randomWord.replace(/./g, '<span class="dashes">_</span>');
    
    //DISPLAY THE UNDERCORE WORD
    userInput.innerHTML = maskedWord;
}

//DRIVER
let winCount = 0;
let count = 0;
const startGame = () => {
    //reset everything
    let winCount = 0;
    let count = 0;
    displayCategories();
}


// const startGame = () => {
//     // let playerName = readlineSync.question("Enter your name: ");
//     // ranking.push({ name: playerName, score: 0 });
//     let randomWord = getRandomWord(words);
//     let underscoreWord = generateunderscoreWord(randomWord);
//     //console.log(underscoreWord.join(' '));
// }


// //check whether the entered letter is in the current word
// const isLetterInWord = (letter, word) => { 
//     return word.includes(letter);
// }

// // place the correctly guessed letter in the correct position
// const placeMatchingLetter = (letter, randomWord,underscoreWord) => {
//     for (let i = 0; i< randomWord.length; i++) {
//         let currentLetter = randomWord[i]
//         if (currentLetter === letter) {
//             underscoreWord
//[i] = letter;
//         }
//     }
//     return underscoreWord;
// }

// // check whether the player has won
// const  hasWon = (sourceWord, newWord) => {
//     if (sourceWord === newWord.join('')) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }