 // SET UP
            // an array to generate random words
            var words = ["rabbit", "snail", "airport", "carrots", "river", "mountain", "house", "mitten", "crown", "volleyball", "bird", "volcano", "fireman", "science", "window", "ground", "muscle",
                            "earth", "toothpaste", "daughter", "tongue", "popcorn", "lunch", "excercise", "carve", "stamp", "program", "haircut", "brush", "spell", "thirty", "twenty", "fourty", "fifty", 
                            "sixty", "seventy", "eighty", "ninety", "hundred"];
            // generate a random word from the words array
            var word = words[Math.floor(Math.random() * words.length)];

            //set up the answer array, shwong the number of letters in the word. 
            var answerArray = [];

            //Each letter is represented by an '_'. we map out the initial field
            for (let i = 0; i <word.length; i++) {
                aswerArray[i] = "_";
            }
            // count the remaining letters that need to be guesssed. Initially set to the total letters of the word
            var remainingLetters = word.length;

        // MAIN GAME LOOP
            // guess until all the letters are guessed
            while (remainingLetters > 0) {
                //show the player their progress
                //letters to be guessed and how many are left
                alert(answerArray.join(' '));

                //promt the player to guesss
                var guess = promt("Guess and Letter or Cancle to give up");

                //if nothing has been guessed or cancle button was clicked
                if (guess==null) {
                    //exit the game loop
                    console.log("You exited the Game!!!!!!!!");
                    break;

                }
                //if the player tries to guess more than one letter at a time or none at all
                else if (guess.length !== 1) {
                    // alert them to guess a single letter only
                    alert("Single Letter Only");    
                }
                // if the guess is valid, i.e. 1 letter was guessed
                else {
                    //update the game state after the guess
                    for (let i = 0; i <word.length; i++) {
                        // check weather the current word contains the letter proposed by the player
                        if (word[i] == guess) {
                            // update the answerArray, placing the correctly guessed letter at the correct position/s
                            answerArray[i] = guess;

                            // subtract the guess from the remaining letters (the guesses are limited)
                            remainingLetters--;
                        }
                    }
                }
        // END OF GAME LOOP

            }

            // Display the full word
            alert(answerArray.join(' '));
            //congratulate the player
            alert("Yay! You've got it right! The password is " + word);
            


