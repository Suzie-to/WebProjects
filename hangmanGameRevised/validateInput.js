const readlineSync = require('readline-sync');


const isLetter = (input) => {
    let isValidInput;
    
    while(!isValidInput) {
        
        if (input.length != 1) {
            console.log("Please only enter single letters! Try again!");
            input = readlineSync.question("Enter a Letter: ");
            isValidInput = false;
        }
        else if (input.toLowerCase() < 'a' || input.toLowerCase() > 'z') {
            console.log("Please only enter a letter from the alphabet");
            input = readlineSync.question("Enter a Letter: ");
            isValidInput = false;
        }
        else {
            console.log("A LETTER");
            isValidInput = true;
        }
    }
    return input.toLowerCase();
}
module.exports = { isLetter };


// let answer = readlineSync.question("Enter a Letter: "); 
// answer = isLetter(answer);
// console.log(answer);