// Wins and guesses counters
var wins = 0;
var guesses = 12;

// An array of choices from which the computer will pick a work
var computerChoice = ["denali", "rainier", "everest", "pikes", "hood", "longs", "aoraki", "Harvard"];

// Array of wrong user guesses
var wrongGuessesArray = [];

// How the computer will randomly choose the word
var word = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// How dashses will be displayed to show the user the length of the random word the computer chose
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Variables to hold references to all html sections game will update
var winsText = document.getElementById("wins");
var userGuessText = document.getElementById("userGuess");
var guessesText = document.getElementById("guesses");
var guessHistoryText = document.getElementById("guessHistory");
var answerArrayText = document.getElementById("word");

// Display dashes for random word computer chose
answerArrayText.textContent = answerArray.join(" ");

// User keystroke to trigger a win or loss and -1 guesses left until guesses left = 0
document.onkeyup = function(event) {
    var userGuess = event.key;

    if (word.includes(userGuess)) {
        var index = word.indexOf(userGuess);
        guesses--;
        //if: 
        //else if:
    } else if (!word.includes(userGuess)) {
        guessesHistoryText.append(" " + userGuess + " ");
        guesses--;
        //if: 
        //else if:
    } 

}


//Steps:
// 1. Pick a random word.
// 2. Take the player’s guess.
// 3. Check that the player’s guess is a valid letter.
// 4. Keep track of letters the player has guessed.
// 5. Show the player their progress.
// 6. Finish when the player has guessed the word.
   