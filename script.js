let getComputerChoice = function(arr) {
    arr=["ROCK","PAPER","SCISSORS"];
    const randomNum = [Math.floor(Math.random()*arr.length)];
    return arr[randomNum];
}

 //get rid of this once you have a playRound function

let getChoices = function(userChoice,computerChoice) {
    rock.onclick = () => {
        userChoice = "ROCK";
        console.log(`You chose: ${userChoice}`);
        computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
    }
    paper.onclick = () => {
        userChoice = "PAPER";
        console.log(`You chose ${userChoice}`);
        computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
    }
    scissors.onclick = () => {
        userChoice = "SCISSORS";
        console.log(`You chose ${userChoice}`);
        computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
    } 
    
 }

rock.addEventListener("click", getChoices());
paper.addEventListener("click", getChoices());
scissors.addEventListener("click", getChoices());

let playRound = function() {
    if (getChoices("PAPER","PAPER")) {
        console.log("tie");
    } else if (getChoices("ROCK","ROCK")) {
        console.log("tie");
    } else if (getChoices("SCISSORS","SCISSORS")) {
        console.log("tie");
    }
}
playRound();