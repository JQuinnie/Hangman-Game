//require wordBank.js for bank of words
//var randomWord = require('./assets/javascript/wordBank.js') //commented out for browser action

//global variables below
var currentGuess = '';
var currentWordArr = [];
var wrongLetArr = [];
var numBlanks = 0;

//game counters
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;

//functiont to start the game
function startGame() {
	//set up reset values
	guessLeft = 9;
	currentWordArr = [];
	wrongLetArr = [];

	//generate new random word
	var currentWord = randomWord();
	console.log(currentWord);

	//populate current words with right number of blanks
	currentWord.forEach(function (let) {
		currentWordArr.push('_')
	});
	console.log(currentWordArr);

	//update HTML with jQuery
	$(document).ready(function () {
		// jQuery methods to populate the HTML with initial values
		$('#wordToGuess').text(currentWordArr.join(' '));
		$('#lettersGuessed').text(wrongLetArr.join(''));
		$('#guessesLeft').text(guessLeft);
		$('#win').text(winCount);
		$('#loss').text(lossCount);
	});
};

//initializing game
startGame();

//function to play game
function playGame() {
	//on click event to chart key input
	$(document).ready(function() {

	})
}