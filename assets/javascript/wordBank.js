// function to generate new random word

function randomWord() {
  // Bank of words
  var wordBank = ["acadia", "arches", "badlands", "everglades", "glacier", "olympic",
  "redwood", "sequoia", "shenandoah", "yellowstone", "yosemite", "zion"];
  
  // Logic to pick random word from the bank of words
  var randWordIndex = Math.floor(Math.random()*wordBank.length);
  var randWord = wordBank[randWordIndex];
  var randWordArr = randWord.split('');
  
  return randWordArr;
  }
  
  // console.log(randomWord()); // TEST
  
  // exports an array of the random word split into letters
  //module.exports = randomWord; //commented out for browser action