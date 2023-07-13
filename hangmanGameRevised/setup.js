
//******************************************************SET UP**************************************

const categoriesContainer = document.getElementById("categories-container");
const letterContainer = document.getElementById("letter-container");
const userInput = document.getElementById("user-input");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const endGameText = document.getElementById("end-game-text")

const categories = {
    cssProperties : [
    'COLOR',
    'FONT',
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
    'CONSOLE',
    'SETTIMEOUT',
    'PARSEINT',
    'STRINGIFY'
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

const max_guesses = 6;

let winsCount = 0;
let lossesCount = 0;
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
    winsCount = 0;
    lossesCount = 0;

    userInput.innerHTML = "";
    categoriesContainer.innerHTML = "";
    letterContainer.classList.add('hide');
    newGameContainer.classList.add('hide');
    letterContainer.innerHTML = "";

// GENERATE LETTER BUTTONs
    for(let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
    //cast char into string
    button.innerText = String.fromCharCode(i);
    letterContainer.append(button);

    button.addEventListener("click", () => {
        let secretWordArray = secretWord.split("");
        let dashes = document.getElementsByClassName("dashes");
        
        console.log(button.innerText);
        console.log(secretWordArray);

        // place the correctly guesses letter on it's position(s)
        if(secretWordArray.includes(button.innerText)) {
            secretWordArray.forEach((char, index) => {
                if(char === button.innerText) {
                    dashes[index].innerText = char;

                    // check wether the player has won
                    winsCount++;
                    if(winsCount==secretWordArray.length) {
                        endGameText.innerHTML = `<h2 class="won-message">YOU'VE WON!!!</h2>
                                                <p>The word was <span>${secretWord}</span></p>`;
                                            //block all buttons
                        disableButtons();
                    }

                }

            });
            }
            else {
                //lossesCount the losses (to draw the stick figure)
                lossesCount++;
                console.log(`WRONG GUESSES: ${lossesCount}`)
                //TODO DRAW STICK FIGURE
                drawStickfigure(lossesCount);
                if(lossesCount == max_guesses) {
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
    let {initialDrawing} = CanvasCreator();
//FRAME
    initialDrawing();
}  

//CANVAS
const CanvasCreator = () => {
    let context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    //LINES for the stickfigure
    const drawLine = (fromX, fromY, toX,toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };


    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };
   
    //INITIAL FRAME
    const initialDrawing = () => {
        //clear old drawing on canvas
        context.clearRect(0, 0, canvas.width, context.canvas.height);
        
        //line at the bottom
        drawLine(10, 130, 130, 130);

        //left line
        drawLine(10, 10, 10, 131);

        //top line
        drawLine(10, 10, 70, 10);

        // small line on the top (nuse)
        drawLine(70, 10, 70, 20);
    }; 
    return {initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg};
};

// DRAW THE STICKMAN
const drawStickfigure = (lossesCount) => {
    let {head, body, leftArm, rightArm, leftLeg, rightLeg} = CanvasCreator();

    switch(lossesCount) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
};

//NEW GAME
newGameButton.addEventListener("click", startGame)
window.onload = startGame