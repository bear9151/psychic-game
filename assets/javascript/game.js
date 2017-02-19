//Defines initial varialbles and sets to zero

var currentLetter;
var userGuess = [""];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Array of letters and keypressed var set

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Onload with writing the html

window.onload = function() {
	
	//New Game Function

	function newGame () {
		currentLetter = letters[Math.floor(Math.random() * letters.length)];
		console.log("currentLetter: " + currentLetter);
		guessesLeft = 9;
		userGuess = [""];
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
		document.querySelector("#guesses-so-far").innerHTML = "Your Guesses so far: ";
	};

	//Calling initial new game function

	newGame();

	//When a key is pressed

	document.onkeyup = function(event) {
		if (event.keyCode >= 65 
				&& event.keyCode <= 90 
				&& event.key != userGuess[1] 
				&& event.key != userGuess[2] 
				&& event.key != userGuess[3] 
				&& event.key != userGuess[4] 
				&& event.key != userGuess[5] 
				&& event.key != userGuess[6] 
				&& event.key != userGuess[7] 
				&& event.key != userGuess[8] 
				&& event.key != userGuess[9]) {
			userGuess.push(event.key);
			if (event.key === currentLetter) {
				wins++;
				newGame();
			} else {
				guessesLeft--;
				if (guessesLeft === 0) {
					losses++;
					newGame();
				} else {
				document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
				document.querySelector("#guesses-so-far").append(" " + event.key + ",");
				}
			}
		};
	};
};