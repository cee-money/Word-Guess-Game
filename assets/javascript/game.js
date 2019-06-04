// Wins and guesses counters
var wins = 0;
var guesses = 12;

// An array of choices from which the computer will pick a work
var computerChoice = ["denali", "rainier", "everest", "pikes", "hood", "longs", "aoraki", "harvard", "fuji", "kilimanjaro", "blanc", "olympus", "matterhorn", "elbert", "whitney", "evans", "yale", "sneffels", "princeton", "torreys"];

// Array of wrong user guesses
var wrongGuessesArray = [];

// How the computer will randomly choose the word
var word = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(word);

// How dashses will be displayed to show the user the length of the random word the computer chose
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Array of wrong user guesses
var wrongGuessesArray = [];

// Variables to hold references to all html sections game will update
var winsText = document.getElementById("wins");
var userGuessText = document.getElementById("userGuess");
var guessesText = document.getElementById("guesses");
var guessHistoryText = document.getElementById("guessHistory");
var answerArrayText = document.getElementById("word");
var correctWordText = document.getElementById("correct-word");

// Display dashes for random word computer chose
answerArrayText.textContent = answerArray.join(" ");

// User keystroke to trigger a win or loss and -1 guesses left until guesses left = 0
document.onkeyup = function(event) {
    correctWordText.textContent = " ";
    var userGuess = event.key;

    if (word.includes(userGuess) && (!answerArray.includes(userGuess))) { //condition: if the computer generated word contains the user guess and the answer array does not yet contain the guess
        for (var i = 0; i < word.length; i++) { //cycle through every letter of the word to see if it contains the user's guess
            if (userGuess === word[i]) { //if the userGuess is equal to a certain position in the word (index)
                answerArray[i] = userGuess; // replace the _ with the guess
            }
        } 
        answerArrayText.textContent = answerArray.join(" "); //print out the entire answerArray in the form of a string, now with a letter(s) populated
        guesses--; // deduct 1 guess from the guess counter
        guessesText.textContent =  "Number of Guesses Remaining:  " + guesses; // print out the updated guess counter
            if (!answerArray.includes("_")) { // if the answerArray no longer contains and _'s
                wins++; // add 1 win
                winsText.textContent = "Wins: " + wins; // print the updated win counter
                correctWordText.textContent = "Yes, " + word + "!"; // show a victory confirmation and the correctly guessed word in the div on the left
                guesses=12; // reset guess counter to 12
                guessesText.textContent =  "Number of Guesses Remaining:  " + guesses; // print reset guess counter
                guessHistory.textContent= "Letters Guessed Already: "; // replace guess history text
                wrongGuessesArray = []; // reset the wrong guesses array
                answerArray = []; // empty the answer array
                word = computerChoice[Math.floor(Math.random() * computerChoice.length)]; // have the computer randomly select a new word
                    console.log(word);
                for (var i = 0; i < word.length; i++) {
                    answerArray[i] = "_"; // input dashes for each index in the answer array
                }
                answerArrayText.textContent = answerArray.join(" "); // print the dashes for the length of the chose word
            }
    } else if (guesses > 1 && !wrongGuessesArray.includes(userGuess) && !answerArray.includes(userGuess)) {
        guessHistoryText.append(" " + userGuess + " ");
        wrongGuessesArray.push(userGuess);
        guesses--;
        guessesText.textContent =  "Number of Guesses Remaining:  " + guesses;
    } else if (guesses <= 1) {
        correctWordText.textContent = "Sorry, try again!"; // show a defeat confirmation
        guesses=12; // reset guess counter to 12
        guessesText.textContent =  "Number of Guesses Remaining:  " + guesses; // print reset guess counter
        guessHistory.textContent= "Letters Guessed Already: "; // replace guess history text
        wrongGuessesArray = []; // reset the wrong guesses array
        answerArray = []; // empty the answer array
        word = computerChoice[Math.floor(Math.random() * computerChoice.length)]; // have the computer randomly select a new word
            console.log(word);
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_"; // input dashes for each index in the answer array
        }
        answerArrayText.textContent = answerArray.join(" "); // print the dashes for the length of the chose word
    }
} 

// !word.includes(userGuess) && guesses > 1
// guesses = 0
   