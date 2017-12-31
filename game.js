//require wordBank.js for bank of words
//var randomWord = require('./assets/javascript/wordBank.js') //commented out for browser action

//global variables below
var currentGuess = '';
var currentWord = '';
var currentWordArr = [];
var wrongLetArr = [];
var noRepeatArr = [];
var numBlanks = 0;

//game countersss
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;

//functiont to start the game
function startGame() {
	//set up reset values
	guessLeft = 9;
	currentWordArr = [];
	wrongLetArr = [];
	noRepeatArr = [];

	//generate new random word
	currentWord = randomWord();
	//console.log(currentWord);

	//populate current words with right number of blanks
	currentWord.forEach(function (let) {
		currentWordArr.push('_')
	});
	//console.log(currentWordArr);

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

//function to compare letters
function checkLet(let) {
	var isLetInWord = false;
	//loop to check if letter exist in word
	for (var i = 0; i < currentWord.length; i++) {
		if (let === currentWord[i]) {
			isLetInWord = true;
		}
	}

	//checks if letter is in word, then changes from blank to letter
	if (isLetInWord) {
		for (var i = 0; i < currentWord.length; i++) {
			if (let === currentWord[i]) {
				currentWordArr[i] =
					let;
				$('#wordToGuess').text(currentWordArr.join(' '));
			}
		}
		//console.log(currentWordArr)
	} else { //wrong guess below pushed to array and guesses left decreases by 1
		wrongLetArr.push(let);
		$('#lettersGuessed').text(wrongLetArr.join(' '));
		guessLeft--;
		$('#guessesLeft').text(guessLeft);
	}
}

//function to end the round
function roundComplete() {
	$('#wordToGuess').text(currentWordArr.join(' '));
	//check if user won
	if (currentWordArr.toString() === currentWord.toString()) {
		$('#wordToGuess').text(currentWordArr.join(' '));
		winCount++;
		$('#win').text(winCount);
		setTimeout(function () {
			alert('You WON!!!');
		}, 300);
		setTimeout(function () {
			startGame();
		}, 400)

	} else if (guessLeft === 0) { //check if user has no more guesses
		$('#guessesLeft').text(guessLeft);
		lossCount++;
		$('#loss').text(lossCount);
		alert('Awww... you LOST.');
		setTimeout(function () {
			startGame();
		}, 200)
	}
}

//function to play game
function playGame() {
	//on click event to chart key input
	$(document).keypress(function (e) {
		currentGuess = String.fromCharCode(e.which);
		if (currentGuess.match(/[a-zA-Z]/)) {
			//console.log(currentGuess);
			//loop to determine if the letter is already guessed
			if (noRepeatArr.indexOf(currentGuess) == -1) {
				//if the letter is not guessed, then push into the noRepeat array and continue game
				noRepeatArr.push(currentGuess);
				//run function to check the user current guess with current word
				checkLet(currentGuess);
				$('#wordToGuess').text(currentWordArr.join(' '));
				//run check to see if round is finished
				roundComplete();
			} else {
				// if letter is already guessed and in the noRepeat array, alert
				alert('Letter already guessed');
			}
		} else {
			alert('please press a valid letter');
		}
	})
}

//initializing game
startGame();

//lets play the game
playGame();