// Sets the variables 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var userGuess = document.onkeyup;

// Sets the computerGuess variable equal to a random choice from the letter array.
var compGuess = letters[Math.floor(Math.random() * letters.length)];
// Debugging if the variables refreshed.
//console.log(compGuess);


document.onkeyup = function (event) {
  userGuess = event.key;

// Checking if the userGuess is in possible list of letters if not exits.   
  if (letters.includes(userGuess)) {
  } else {
    return false;
  }

  guessesMade.push(userGuess);

  if (compGuess === userGuess) {
    wins++;
    guessesLeft = 10;
    guessesMade = [];

    compGuess = letters[Math.floor(Math.random() * letters.length)];
    // Debugging if the variables refreshed.
    //console.log(compGuess);

  }
  
  if (compGuess !== userGuess) {
    guessesLeft--;
  }

  if (guessesLeft === 0) {
    losses++;
    guessesLeft = 10;
    guessesMade = [];
    compGuess = letters[Math.floor(Math.random() * letters.length)];
    // Debugging if the variables refreshed.
    //console.log(compGuess);

  }

  var html =
    '<p><h1>The Psychic Game</h1></p>' +
    '<p>Guess what letter I am thinking of</p>' +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses Left: ' + guessesLeft + '</p>' +
    '<p>Your Guesses: ' + guessesMade + '</p>';
document.getElementById("game").innerHTML = html;
}
