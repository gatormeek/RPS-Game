/*This first function serves two purposes: first to generate a random number, then to assign
that random number to "ROCK" "PAPER" or "SCISSORS" and print the results to the console. */
//set a random number between 0 and 2 to the output rock paper or scissors
let getEncodedComputerInput = function() {
	let ranNum=Math.floor(Math.random()*3)
		if (ranNum==0) {
			let computerChoice="ROCK";
			//console.log(ranNum)
			console.log(`Computer chose: ${computerChoice}`)
			return computerChoice;
		} else if (ranNum==1) {
			let computerChoice="PAPER";
			//console.log(ranNum)
			console.log(`Computer chose: ${computerChoice}`)
			return computerChoice;
		} else {
			let computerChoice="SCISSORS";
			//console.log(ranNum)
			console.log(`Computer chose: ${computerChoice}`)
			return computerChoice;
		}
}

/*This second function serves as a user input function. This simply prompts the user for an input,
then stores that input for later comparison in our scoring function.*/
//get the user choice and return the output string
let userChoice=prompt("Choose Your Fighter! OPTIONS: ROCK, PAPER, SCISSORS: ").toUpperCase();
let getEncodedUserChoice = function() {
	if (userChoice=="ROCK") {
		console.log(`You chose: ROCK`);
		return userChoice;
	} else if (userChoice=="PAPER") {
		console.log(`You chose: PAPER`)
		return userChoice;
	} else if (userChoice=="SCISSORS") {
		console.log(`You chose: SCISSORS`)
		return userChoice;
	}
}
//call the functions so they actually run and rename them to store the results
let getUserChoice=getEncodedUserChoice();
//^this one seems like it may return the whole string "You chose: x" but it actually just returns x
let getComputerChoice=getEncodedComputerInput();

/*This is our first scoring function. This will compare the scores for each round to determine 
the winner.*/
//this one returns the winner or tie string, but otherwise doesn't count the number of wins
let getRoundScore=function() {
	if (getUserChoice===getComputerChoice) {
		console.log("Round tie!")
		return "Round tie!";
	} else if ((getUserChoice==="ROCK") && (getComputerChoice==="SCISSORS")) {
		console.log("You win this round!")
		return "You win this round!";
	} else if ((getUserChoice==="PAPER") &&(getComputerChoice==="ROCK")) {
		console.log("You win this round!")
		return "You win this round!";
	}else if ((getUserChoice==="SCISSORS") && (getComputerChoice==="PAPER")) {
		console.log("You win this round!")
		return "You win this round!";
	} else {
		console.log("Computer wins this round!")
		return "Computer wins this round!";
	}
}
//stores the win or tie string...could the above function be more useful?
let roundScore=getRoundScore();
/*if I put runGameScore(userScore, computerScore) then declare the variables below it gets mad
at me and tells me the variables have already been declared. This must mean that the interior
variables in the "function()" declaration are effectively constants.*/
//declaring variables outside the function creates an infinite loop for some reason.
let runGameScore=function() {
	userScore=0;
	computerScore=0;
	totalScore=0;
	if (roundScore==="Round tie!") {
		return (++userScore + ++computerScore)
	} else if (roundScore==="You win this round!") {
		++userScore;
	} else if (roundScore==="Computer wins this round!") {
		++computerScore;
	}
	console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);
	totalScore = userScore + computerScore;
	return totalScore;
}

do {
	userChoice;
	getRoundScore();
	runGameScore();
} while (totalScore<6);
/*this seems to work. Now I just have to make sure the user input is requested and completed 
I have a total number of rounds equal to 5*/
/*let toGameStop=function() {
	do {
		runGameScore(userScore, computerScore, totalScore);
	} while (totalScore<6)
}
toGameStop(); */