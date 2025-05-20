let playerSelection;

const decisionContainer=document.querySelector('#decision-container');
decisionContainer.addEventListener('click', (event) => {
    if (event.target.id==='ROCK') {
        playerSelection=event.target.id;
        document.querySelector('#user-play').textContent=`You chose: ${playerSelection}`;
        console.log(`Button clicked, player Selection defined as: ${playerSelection}`);
        playRound(playerSelection);
    } if (event.target.id==='PAPER') {
        playerSelection=event.target.id;
        document.querySelector('#user-play').textContent=`You chose: ${playerSelection}`;
        console.log(`Button clicked, player selection defined as: ${playerSelection}`);
        playRound(playerSelection);
    } if (event.target.id==='SCISSORS') {
        playerSelection=event.target.id;
        document.querySelector('#user-play').textContent=`You chose: ${playerSelection}`;
        console.log(`Button clicked, player selection defined as: ${playerSelection}`);
        playRound(playerSelection);
    }
});
const choices = ["ROCK", "PAPER", "SCISSORS"];    
let getComputerChoice = function() {
    return choices[Math.floor(Math.random()*choices.length)];
}
let userScore=0;
let computerScore=0;
function playRound(playerSelection) {
    
    console.log(`Player Selection: ${playerSelection}`);
    const computerSelection=getComputerChoice();
    console.log(`Computer Selection: ${computerSelection}`);
    document.querySelector('#computer-play').textContent=`Computer Chose: ${computerSelection}`;
        let result;
        if (playerSelection===computerSelection) {
            result='Tie';
        } else if ((playerSelection==='ROCK' && computerSelection==='SCISSORS') || 
        (playerSelection==='PAPER' && computerSelection==='ROCK') ||
        (playerSelection==='SCISSORS' && computerSelection==='PAPER')) {
            result='You win';
            userScore++;
        } else {
            result='You lose';
            computerScore++;
        }
        document.querySelector('#result').textContent=`${result}`;
        document.querySelector('#computer-score').textContent=`Computer Score: ${computerScore}`;
        document.querySelector('#user-score').textContent=`Your Score: ${userScore}`;
}

let checkGameComplete = function() {
    if (userScore===5 || computerScore===5) {
        decisionContainer.foreach((btn)=>(btn.disabled=true));
        if (userScore>computerScore) {
            document.querySelector('#game-result').textContent="You win!";
        } else {
            document.querySelector('#game-result').textContent="You lose!";
        }
    }
}




