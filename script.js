let playerSelection;
const gameContainer=document.querySelector('#game-container');
const decisionContainer=document.querySelector('#decision-container');
const restartGame=document.querySelector('#restart-game');
decisionContainer.addEventListener('click', (event) => {
    if (event.target.id==='ROCK') {
        playerSelection=event.target.id;
        document.querySelector('#user-play').textContent=`You chose: ${playerSelection}`;
        playRound(playerSelection);
    } if (event.target.id==='PAPER') {
        playerSelection=event.target.id;
        document.querySelector('#user-play').textContent=`You chose: ${playerSelection}`;
        playRound(playerSelection);
    } if (event.target.id==='SCISSORS') {
        playerSelection=event.target.id;
        document.querySelector('#user-play').textContent=`You chose: ${playerSelection}`;
        playRound(playerSelection);
    }
});
const choices = ["ROCK", "PAPER", "SCISSORS"];    
let getComputerChoice = function() {
    return choices[Math.floor(Math.random()*choices.length)];
}
let userScore=0;
let computerScore=0;
let ties=0;
function playRound(playerSelection) {
    const computerSelection=getComputerChoice();
    document.querySelector('#computer-play').textContent=`Computer Chose: ${computerSelection}`;
        let result;
        if (playerSelection===computerSelection) {
            result='Tie';
            ties++;
            if (ties===1) {
            document.querySelector('#ties').textContent=`You tied.`
            } else if (ties===2) {
            document.querySelector('#ties').textContent=`Ties: ${ties}. You idiot. You've tied twice. Do better.`
            } else if (ties>2) {
            document.querySelector('#ties').textContent=`Ties: ${ties}. Are you even trying?`
            }
        } else if ((playerSelection==='ROCK' && computerSelection==='SCISSORS') || 
        (playerSelection==='PAPER' && computerSelection==='ROCK') ||
        (playerSelection==='SCISSORS' && computerSelection==='PAPER')) {
            result='You win';
            userScore++;
            checkGameComplete();

        } else {
            result='You lose';
            computerScore++;
            checkGameComplete();
        }
        document.querySelector('#result').textContent=`${result}`;
        document.querySelector('#computer-score').textContent=`Computer Score: ${computerScore}`;
        document.querySelector('#user-score').textContent=`Your Score: ${userScore}`;
}

let checkGameComplete = function() {
    if (userScore===5 || computerScore===5) {
        gameContainer.style.display = 'none';
        if (userScore>computerScore) {
            return document.querySelector('#game-result').textContent="You win!";
        } else {
            return document.querySelector('#game-result').textContent="You lose!";
        }
    }
}

let restart = function (userScore, computerScore) {
    userScore=0;
    computerScore=0;
}