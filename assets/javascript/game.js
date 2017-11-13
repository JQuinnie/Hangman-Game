
var wordBank = ["acadia", "arches", "badlands", "everglades", "glacier", "olympic",
 	"redwood", "sequoia", "shenandoah", "yellowstone", "yosemite", "zion"];

//global variables below
var randomWord = "";
var currentGuess = "";
var randWordArray = "";

//Creates div for accepting randomWord
var randomDiv = document.getElementById("randomWord-div");


//Generates a random word for Hangman from wordBank
randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);

//Array of blanks for each letter of the randomWord
for (var i=0; i < randomWord.length; i+=1){
	randWordArray += "_ ";
};

document.getElementById("randomWord-div").innerHTML = randWordArray;


//Saving letters remaining to guess
// var lettersToGuess = randomWordArray.length;
// console.log(lettersToGuess);

//When user presses a key, it is saved in CurrentGuess
document.onkeyup = function(event){
	currentGuess = event.key;

	var wordSplit = randomWord.split("");

	console.log(wordSplit);

	var numLetter = wordSplit.length;

	var blanksAndSuccesses = [];

	for (var j=0; j < numLetter; j++){
		blanksAndSuccesses.push("_");
	};

	console.log(blanksAndSuccesses);

	for (var i=0; i<numLetter; i++){
	if (currentGuess === wordSplit[i]){
		console.log(wordSplit[i]);
		//currentGuess
	} else {
		console.log("doesnt work");
	}
	};


};

//.push(), .split()
//use .join()



 