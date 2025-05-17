
//------------------------------------------------------------------------------------------------


let getComputerChoice = function(arr) {
    arr=["ROCK","PAPER","SCISSORS"];
    const randomNum = [Math.floor(Math.random()*arr.length)];
    return arr[randomNum];
}

 //get rid of this once you have a playRound function

let getUserChoice = function(userChoice) {
    rock.onclick = () => {
        userChoice = "ROCK";
        console.log(`You chose: ${userChoice}`);
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
    }
    paper.onclick = () => {
        userChoice = "PAPER";
        console.log(`You chose ${userChoice}`);
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
    }
    scissors.onclick = () => {
        userChoice = "SCISSORS";
        console.log(`You chose ${userChoice}`);
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
    } 
 }

rock.addEventListener("click", getUserChoice());
paper.addEventListener("click", getUserChoice());
scissors.addEventListener("click", getUserChoice());

/*let playRound = function() {
    let userChoice=getUserChoice();
    let computerChoice=getComputerChoice();
    if (userChoice===computerChoice) {
        console.log("Tie");
    } if (userChoice==="ROCK" && computerChoice==="SCISSORS") {
        console.log("You win");
    } if (userChoice==="SCISSORS" && computerChoice==="PAPER") {
        console.log("You win");
    } if (userChoice==="PAPER" && computerChoice==="ROCK") {
        console.log("You win");
    } else {
        console.log("You lose");
    }
}
playRound(); */