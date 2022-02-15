// declare and initialize array
let game = ["CLOUD", "MOG", "SQUALL", "SEPHIROTH", "SELPHIE", "TIFA", "JECHT", "VIVI", "VINCENT", "GOLBEZ"];
let usedLetters = [];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        } 
        
        if (found == false){
            attemptsLeft--;
            if (attemptsLeft == 5){
                    document.getElementById("hangman").src = "images/02.png";
                } else if (attemptsLeft == 4){
                    document.getElementById("hangman").src = "images/03.png";
                } else if (attemptsLeft == 3){
                    document.getElementById("hangman").src = "images/04.png";
                } else if (attemptsLeft == 2){
                    document.getElementById("hangman").src = "images/05.png";
                } else if (attemptsLeft == 1){
                    document.getElementById("hangman").src = "images/06.png";
                } else if (attemptsLeft == 0){
                    document.getElementById("hangman").src = "images/07.png";
                }
        
        }    
    
        
        output = output + display[c] + ' ';
    
    }

    

   
    
    document.getElementById("word").innerHTML = output;
    output = '';
    //attemptsLeft--;

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});


//scirpt connected fine somereason the button and the script are not registering.