let playerSelection;
const gameContainer=document.querySelector('#game-container');
const decisionContainer=document.querySelector('#decision-container');
const restartGame=document.querySelector('#restart');
const gameResult=document.querySelector('#game-result');
const scoreBlock=document.querySelector('#score-block');
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
            result='';
            ties++;
            if (ties===1) {
            document.querySelector('#ties').textContent=`How original...You tied.`
            } else if (ties===2) {
            document.querySelector('#ties').textContent=`Ties: ${ties}. You idiot. You've tied twice. Do better.`
            } else if (ties===3) {
            document.querySelector('#ties').textContent=`Ties: ${ties}. Are you even trying?`
            } else if (ties>3) {
            document.querySelector('#ties').textContent=`Ties: ${ties}. All of organic evolution somehow lead to you tying a machine.`
            } 
        } else if ((playerSelection==='ROCK' && computerSelection==='SCISSORS') || 
        (playerSelection==='PAPER' && computerSelection==='ROCK') ||
        (playerSelection==='SCISSORS' && computerSelection==='PAPER')) {
            document.querySelector('#ties').textContent='';
            result='You win';
            userScore++;
            checkGameComplete();

        } else {
            document.querySelector('#ties').textContent='';
            result='You lose';
            computerScore++;
            checkGameComplete();
        }
        document.querySelector('#result').textContent=`${result}`;
        document.querySelector('#computer-score').textContent=`Computer Score: ${computerScore}`;
        document.querySelector('#user-score').textContent=`Your Score: ${userScore}`;
}

let checkGameComplete = function() {
    if (userScore===5 || computerScore===5 || ties===5) {
        gameContainer.style.display = 'none';
        restartGame.style.display = 'flex';
        gameResult.style.display = 'flex';
        gameResult.style.whiteSpace='pre-line';
        if (userScore>computerScore) {
            document.querySelector('#game-result-actual').textContent=`You must have cheated. Computer wins. Idiot.`;
            document.querySelector('#game-over-user-score').textContent=`Your Score: 0`;
            document.querySelector('#game-over-computer-score').textContent=`Computer Score: 5`;
            document.querySelector('#game-over-ties').textContent=`Ties: ${ties}`;
        } else if (userScore<computerScore) {
            document.querySelector('#game-result-actual').textContent=`HA HA HA YOU LOST. IDIOT!`;
            document.querySelector('#game-over-user-score').textContent=`Your Score: ${userScore}`;
            document.querySelector('#game-over-computer-score').textContent=`Computer Score: ${computerScore}`;
            document.querySelector('#game-over-ties').textContent=`Ties: ${ties}`;
        } else {
            document.querySelector('#game-result-actual').textContent=`Seriously? Stop copying my work. That's too many ties. Tie goes to the computer, idiot.`;
            document.querySelector('#game-over-user-score').textContent=`Your Score: 0`;
            document.querySelector('#game-over-computer-score').textContent=`Computer Score: 5`;
            document.querySelector('#game-over-ties').textContent=`Ties: ${ties}`;
        }
    }
}

restartGame.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    ties = 0;
    document.querySelector('#user-score').textContent=`Your Score: ${userScore}`
    document.querySelector('#computer-score').textContent=`Computer Score: ${computerScore}`
    document.querySelector('#ties').textContent=`Ties: ${ties}`
    document.querySelector('#result').textContent=''
    gameContainer.style.display = 'block';
    restartGame.style.display = 'none';
    gameResult.style.display = 'none';
    


})