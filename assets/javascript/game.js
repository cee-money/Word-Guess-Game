//directions

//wins, losses, guesses counters
var wins = 0;
var guesses = 12;

// computer chooses word from an array
var computerChoice = ["Denali", "Rainier", "Everest", "Pikes", "Kilimanjaro", "Hood", "Longs", "Aoraki", "Shasta", "Crestone", "Harvard"];

// Variables to hold references to all html sections game will update
var winsText = document.getElementById("wins");
var userGuessText = document.getElementById("userGuess");
var guessesText = document.getElementById("guesses");
var guessesHistoryText = document.getElementById("guessesHistory");

// userGuess is shown
//     can only guess each letter once
// when wins game resets
// when user wins, image of word displays in the top left column

// Computer chooses word randomly from computerChoices array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// User keystroke to trigger a win or loss and -1 guesses left until guesses left = 0
document.onkeyup = function(event) {
    var userGuess = event.key;
// if my guess === a letter in the computer's word, add letter to current word display game reset (set counters to 0 0 9, display original HTML, computer to make new guess)
    if (userGuess === computerGuess) { 
        win++;
        guesses=12;
        winsText.textContent = "Wins: " + wins;
        guessesText.textContent =  "Number of Guesses Remaining: " + guesses;
        guessesHistory.textContent= "Letters Already Guessed: ";
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 // else if my guess !== computer's guess, I get 8 more guesses then game resets upon win or loss (set counters to 0 0 9, display original HTML)
    } else if (guesses > 1) {
        guesses--;
        guessesText.textContent =  "Number of Guesses Remaining: " + guesses;
        guessesHistoryText.append(" " + userGuess + " ");
// else my guess !=== computer's guess and I have no more guesses, so loss counter increments by 1 and game resets
    } else {
        guesses=12;
        guessesText.textContent =  "Number of Guesses Remaining: " + guesses;
        guessesHistory.textContent = "Letters Already Guessed: ";
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
}