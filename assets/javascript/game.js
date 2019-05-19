let wordlist = ["locke", "sabin", "celes", "kefka", "edgar"]
var selectedWord = "";
var lettersInWord = "";
var numOfSpaces = 0;
var blankAndGuessed = [];
var wrongGuess = [];

var numWins = 0;
var numLoses = 0;
var numGuesses = 10;

function startgame() {
    numGuesses = 10;
    selectedWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    lettersInWord = selectedWord.split("");
    numOfSpaces = lettersInWord.lengthl

    console.log(selectedWord);

    blankAndGuessed =[];
    wrongGuess = [];

    for (var i = 0; i < numOfSpaces; i++){
        blankAndGuessed.push("")
    }

    console.log(blankAndGuessed);

    document.getElementById("guessesLeft").innerHTML = numGuesses;
    documnet.getElementById("word-blanks").innerHTML = blankAndGuessed.join('');
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join('');
}

function checkLetter(letter){
    var letterInWord = false;

    for (var i = 0; i < numOfSpaces; i++){
        if (selectedWord[i] === letter){
            letterInWord = true;
        }
    }

if(letterInWord){
    for (var j = 0; j < numOfSpaces; j++){
        if(selectedWord[j] === letter) {
            blankAndGuessed[j] = letter;
        }
    }
  console.log(blankAndGuessed);
}
else {
    wrongGuess.push(letter);
    numGuesses--;
  }
}

function endRound(){
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blankAndGuessed.join("");
    documnet.getElementById("wrong-guesses").innerHTML = wrongGuess.join("");

if(lettersInWord.toString() === blankAndGuessed.toString()){
    winCounter++

    document.getElementById("win-counter").innerHTML = winCounter;
    startgame();
}

else if (numGuesses === 0 ){
    numLoses++;

    document.getElementById("lose-counter").innerHTML = numLoses;
    startgame();
}

startgame();

document.onkeyup = function(event){
    var wrongGuess = String.fromCharCode(event.which).toLocaleLowerCase();
    checkLetter(wrongGuess);
    endRound();
}

}