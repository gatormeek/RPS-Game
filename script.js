
//This is a rock-paper-scissors game that will run in the console only. 

/*
COMPUTER INPUT: Should return a random num between 0-3, 0 = rock 1 = paper 2 = scissors
*/
/*This specific function just returns the value of a random number between 0 and 3*/ 
function getEncodedComputerInput() {
	return Math.floor(Math.random()*3);
}
/*This one just sets that random number to a value of ROCK PAPER or SCISSORS... how do I make 
sure I'm comparing the values against the user input properly? Likely by encoding the userInput
in the same way. The strings won't ever be equivalent, because I want the console to log 
"Computer choice: X" and "User choice: Y" which means the strings aren't equivalent, even if 
both outcomes are "ROCK". The encoded value might be the same though, so if I create a function
called getEncodedUserInput and compare it to getEncodedComputerInput, I should be able to compare
the outcomes of those functions and deternmine the score using function getScore */
function getComputerChoice() {
	const logComputerChoice = getEncodedComputerInput();
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
let computerPlay = getComputerChoice();
/*
This is the User input section. This should prompt user input and 
compare it to the computer input to return a value of “Wow, you
 actually won. I’m shocked.” or “Don't quit your day job.”
*/
let userInput= prompt("Choose Your Fighter! OPTIONS: ROCK, PAPER, SCISSORS").toUpperCase();
let getUserInput=function() {
    if (userInput==("ROCK")) {
        return console.log(`You chose ${userInput}`);
	} else if (userInput==("PAPER")) {
		return console.log(`You chose ${userInput}`);
	} else if (userInput==("SCISSORS")) {
		return console.log(`You chose ${userInput}`);
	} else {
        return console.log(`${userInput} is not a valid input, you absolute donkey. Point for the computer!`)
    }
}
/*3 is for that situation where the user inputs something invalid, I will make this give a point
to the computer later on. I mean, you can't exactly let that count as a tie, can you? It's got 
to count as a point against you. I'm probably not supposed to make notes have this much 
personality but I think it makes the reading of the code more fun. */
let encodeToNum=userInput;
function getEncodedUserInput() {
	if (encodeToNum=="ROCK") {
		return encodeToNum = 0;
	} else if (encodeToNum=="PAPER") {
		return encodeToNum = 1;
	} else if (encodeToNum=="SCISSORS") {
		return encodeToNum = 2;
	} else {
		return encodeToNum = 3;
	}
}
let userNum = getEncodedUserInput();
let computerNum = getEncodedComputerInput();
getUserInput();
/*Remember that ROCK = 0 PAPER = 1 SCISSORS = 2 */
function getScore() {
	if (userNum === computerNum) {
		return console.log("Great... a tie. Be more creative.")
	} else {
		return console.log("not a tie")
	}
}
getScore();