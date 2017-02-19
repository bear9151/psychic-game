//Defines an array for words to be guessed

var wordBank = ["wicked", "waitress", "hamilton"];

//Defines the letter bank to be used

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Defines variables for wins and losses

var wins = 0;
var losses = 0;


//define variables for: Input, Remaining Letters, Guesses, Current Word, Reveal Word?

var keyPressed;
var remainingLetters;
var guesses;
var currentWord;
var revealWord;

//ondocument ready function

$(document).ready(function() {


//Starts the new game function

	function newGame() {
		currentWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
	}
	newGame();
	console.log(currentWord);

//Choose a word at random and write the blank spaces to page

//Check if selected letter is part of current word

});