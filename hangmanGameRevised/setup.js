
//******************************************************SET UP**************************************

const categoriesContainer = document.getElementById("categories-container");
const letterContainer = document.getElementById("letter-container");
const userInput = document.getElementById("user-input");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const endGameText = document.getElementById("end-game-text")



let windowRight = document.querySelector('.window-right');
let windowLeft = document.querySelector('.window-left');
let roof = document.querySelector('.roof');
let banner = document.querySelector('h1');
let doorLeft = document.querySelector('#left-door');
let doorRight = document.querySelector('#right-door');

const categories = {
    cssSensei : ["SELECTOR", "BOX MODEL", "FLEXBOX", "GRID", "RESPONSIVE", 
    "ANIMATION", "TYPOGRAPHY", "GRADIENT", "TRANSITION", "PSEUDO-CLASS"],


javaScriptJedi : ["VARIABLE", "FUNCTION", "ARRAY", "OBJECT", "DOM MANIPULATION",
 "EVENT LISTENER", "CONDITIONAL", "LOOP", "SCOPE", "CALLBACK"],


 htmlHeros : ["MARKUP", "ELEMENT", "ATTRIBUTE", "BROWSER", "HEADINGS",
                "LISTS", "HYPERLINK", "IMAGE", "FORM", "TABLE"]
};

const maxWrongGuesses = 6;

let correctGuesses = 0;
let wrongGuesses = 0;
let secretWord = "";


const displayCategories = () => {
    categoriesContainer.innerHTML += `<h3>What's your expertise?</h3>`;
    
    let buttonContainer = document.createElement("div");
    //generate a button for each category
    for(let category in categories) {
        buttonContainer.innerHTML += `<button class="categories" onclick="displayWord('${category}')" >${category}</button>`
    }

    categoriesContainer.appendChild(buttonContainer);
};

//diable a button that has been ckilcked already
const disableButtons = () => {
    let categoryButtons = document.querySelectorAll(".categories");
    let letterButtons = document.querySelectorAll(".letters");
//TODO disable the other two buttons when a category is chosen
    //disable all categories
    categoryButtons.forEach((button) => {
        button.disabled = true;
    });
    //disable all letters
    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    //display game
    newGameContainer.classList.remove("hide");
};

// SELECT A CATEGORY
//return a random word from the catgeory array display it encrypted
let displayWord = (categoryName) => {
    let categoryButtons = document.querySelectorAll(".categories");

    //convert the node list into an array to access the elements
    Array.from(categoryButtons).forEach(button => {
        //console.log("categoryName");
        //compare each element value(category) with the value(category) of the button innerText
        if(button.innerText.toLowerCase() === categoryName) {
            //finally highlight the button and activate it
            button.classList.add('active');
        }
        // disable all non-active buttons
        else {
            button.disables = true;
        }        
    });

//RESET
    //reveal the letters that we hidden initially
    letterContainer.classList.remove('hide')
    // set the initial user input to null
    userInput.innerText = "";


//GENERATE A RANDOM WORD
    let categoryArray = categories[categoryName];
    //genereate a random index : Math.random() * (max-min) + min incl min, excl max
    let randomIndex = Math.floor(Math.random() * categoryArray.length);
    secretWord = categoryArray[randomIndex];
    console.log(`SECRET WORD = ${secretWord}`);


//ENCRYPTION - REPLACE EACH CHARACTER WITH AN UNDERSCORE
    //let maskedWord = secretWord.split('').map(() => '<span class="dashes">_</span>').join('');
    let maskedWord = secretWord.replace(/./g, '<span class="dashes">_</span>');
    
    //DISPLAY THE UNDERCORE WORD
    userInput.innerHTML = maskedWord;
}

//DRIVER

const startGame = () => {
//RESET FIELD
    correctGuesses = 0;
    wrongGuesses = 0;

    userInput.innerHTML = "";
    categoriesContainer.innerHTML = "";
    letterContainer.classList.add('hide');
    newGameContainer.classList.add('hide');
    letterContainer.innerHTML = "";

// GENERATE LETTER BUTTONS
    for(let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");

        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);

        button.addEventListener("click", () => {
            let secretWordArray = secretWord.split("");
            let dashes = document.getElementsByClassName("dashes");
            
            console.log(button.innerText);
            console.log(secretWordArray);

        // place the correctly guesses letter at corresponding position(s)
        if(secretWordArray.includes(button.innerText)) {
            secretWordArray.forEach((char, index) => {
                if(char === button.innerText) {
                    dashes[index].innerText = char;

                    // check wether the player has won
                    correctGuesses++;
                    if(correctGuesses==secretWordArray.length) {
                        doorLeft.style.transform = 'rotateY(-140deg)';
                        doorRight.style.transform = 'rotateY(140deg)';

                        endGameText.innerHTML = `<h2 class="won-message">YOU'VE WON!!!</h2>
                                                <p>The word was <span>${secretWord}</span></p>`;
                       
                        disableButtons();
                    }
                }
            });

        } else {
            //wrongGuesses used to diintegrate the bootcamp school
            wrongGuesses++;
            console.log(`WRONG GUESSES: ${wrongGuesses}`)

            removeHouseElements(wrongGuesses);

            if(wrongGuesses == maxWrongGuesses) {
                endGameText.innerHTML = `<h2 class='lost-message'>YOU LOST !!</h2>
                                        <p>The word was <span>${secretWord}</span></p>`
                disableButtons();
            }
        }
       
        button.disabled = true;

        });

        letterContainer.append(button);
    }
    displayCategories();

    // RESET
    windowRight.style.visibility = 'visible';
    windowLeft.style.visibility = 'visible';
    doorRight.style.visibility = 'visible';
    doorLeft.style.visibility = 'visible';
    roof.style.visibility = 'visible';
    banner.style.visibility = 'visible';
    doorLeft.style.transform = 'rotateY(0)';
    doorRight.style.transform = 'rotateY(0)';
}  

// REMOVE AN ELEMENT FROM THE SCOOL FOR EACH WRONG GUESS
const removeHouseElements = (lossesCount) => {

    switch(lossesCount) {
        case 1:  
            windowRight.style.visibility = 'hidden';
            break;
        case 2:
            windowLeft.style.visibility = 'hidden';
            break;
        case 3:
            roof.style.visibility = 'hidden';
            break;
        case 4:
            banner.style.visibility = 'hidden';
            break;
        case 5:
            doorRight.style.visibility = 'hidden';
            break;
        case 6:
            doorLeft.style.visibility = 'hidden';
            break;
        default:
            break;
    }
};


//NEW GAME
newGameButton.addEventListener("click", startGame)
window.onload = startGame