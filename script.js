
//This is a rock-paper-scissors game that will run in the console only. 

/*
COMPUTER INPUT: Should return a random num between 0-3, 0 = rock 1 = paper 2 = scissors
*/

function getComputerInput() {
	return Math.floor(Math.random()*3);
}
function logComputerChoice() {
	const logComputerChoice = getComputerInput();
        if (logComputerChoice === 0) {
            let computerChoice = "ROCK";
		    return console.log(`Computer chose ${computerChoice}`);
        } else if (logComputerChoice === 1) {
            let computerChoice = "PAPER";
		    return console.log(`Computer chose ${computerChoice}`);
        } else if (logComputerChoice===2) {
            let computerChoice = "SCISSORS"
		    return console.log(`Computer chose ${computerChoice}`);
        }
}
logComputerChoice();
/*
This is the User input section. This should prompt user input and 
compare it to the computer input to return a value of “Wow, you
 actually won. I’m shocked.” or “LMAOOOO you bum”
*/
function getUserInput() {
	let userInput= prompt("Choose Your Fighter! OPTIONS: ROCK, PAPER, SCISSORS").toUpperCase();
    if (userInput == "ROCK" || "PAPER" || "SCISSORS") {
        console.log(`You chose ${userInput}`);
    } else if (userInput = null) {
        console.log("That's not a valid input, you bum")
    }
}
 let encodeToNum = getUserInput();
function encodeUserInput() {
	if (encodeToNum === "ROCK") {
	encodeToNum = 0;
    console.log(encodeToNum)
	} else if (encodeToNum === "PAPER") {
	encodeToNum = 1;
	} else if (encodeToNum === "SCISSORS") {
	encodeToNum = 2;
	} else if (encodeToNum === null) {
	return console.log("You didn't enter a valid choice, you bum.");
	}
	return encodeToNum;
}


