var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;

theGame();

function theGame() {
	
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 25)];
	var computerChoice = randomLetter;

	console.log(computerChoice);
		
	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {

			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");
			
			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");
			
			} else if (userChoice === computerChoice) {
				console.log("You win."); 
					
			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); 

				console.log("Your guesses so far: " + yourGuess); 

				document.getElementById("your-guesses").innerHTML = yourGuess;

				console.log("Guesses Left: " + guessesLeft); 

				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9; 
		yourGuess = [];  
		document.getElementById("guesses-left").innerHTML = guessesLeft;  
		document.getElementById("your-guesses").innerHTML = yourGuess;    
		theGame(); 

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			console.log("YOU LOSE."); 
			alert("YOU LOSE!");
			losses = losses + 1
			document.getElementById("your-losses").innerHTML = losses;

			resetGame();

		} else {
			console.log("Incorrect. Try again"); 
			checkIfCorrect();
		}

	}

}