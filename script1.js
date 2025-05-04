let getEncodedComputerChoice= function(computerNum) {
    let computerInput=Math.floor(Math.random()*3);
    computerNum=computerInput;
    return computerNum;
}
 let getComputerChoice= function(computerChoice) {
    let randomNum=getEncodedComputerChoice();
    if (randomNum==0) {
        computerChoice="ROCK";
        console.log(`Computer chose: ${computerChoice}`)
        return computerChoice;
    } else if (randomNum==1) {
        computerChoice="PAPER";
        console.log(`Computer chose: ${computerChoice}`)
        return computerChoice;
    } else if (randomNum==2) {
        computerChoice="SCISSORS";
        console.log(`Computer chose: ${computerChoice}`)
        return computerChoice;
    }
 }

 let getUserChoice = function(userChoice) {
	let userInput=prompt("Choose Your Fighter! OPTIONS: ROCK, PAPER, SCISSORS: ");
	userChoice=userInput.toUpperCase();
    if (userChoice=="ROCK") {
        console.log(`You chose: ${userChoice}`);
        return userChoice;
    } else if (userChoice=="PAPER") {
        console.log(`You chose ${userChoice}`);
        return userChoice;
    } else if (userChoice=="SCISSORS") {
        console.log(`You chose ${userChoice}`);
        return userChoice;
    } else {
        console.log(`"${userChoice}" isn't a valid input, weirdo. Point goes to the computer.`);
        return userChoice;
    }
}
function playGame() {
    let userScore=0;
    let computerScore=0;
    function playRound(userChoice, computerChoice) {
        if (userChoice===computerChoice) {
            console.log("Great...a tie. Be more creative next time.");
            userScore++;
            computerScore++;
        } else if ((userChoice=="ROCK" && computerChoice=="SCISSORS")||(userChoice=="SCISSORS" && computerChoice=="PAPER")||(userChoice=="PAPER" && computerChoice=="ROCK")) {
            console.log("Wow, you actually won. That's a shock.");
            userScore++;
        } else {
            console.log("HAHAHAHA YOU LOST! YOU SUCK!");
            computerScore++;
        }
    }
    for (let playRoundCount=1; playRoundCount<6; playRoundCount++) {
    const userSelection=getUserChoice();
    const computerSelection=getComputerChoice();
    playRound(userSelection, computerSelection);
    console.log("Number of rounds complete: " + playRoundCount);
    console.log("Your score: " + userScore);
    console.log("Computer score: " + computerScore);
    }
    if (userScore>computerScore) {
        console.log("You must have cheated. Computer wins. LOSER.")
    } else if (computerScore>userScore) {
        console.log("Yeah, that's what I thought. You're a LOSER.")
    } else {
        console.log("Seriously? A tie? Tie goes to the computer. Computer always wins, you loser.")
    }
}
playGame();