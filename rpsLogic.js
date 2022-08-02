//declaration of variables
let playerScore = 0;
let computerScore = 0;
let round = 0;

//get a random choice of rock, paper, or scissors
function getComputerChoice(){
    let choice = 0;
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        choice = 'rock';
    } else if (random === 1) {
        choice = 'paper';
    } else{
        choice = 'scissors';
    }
    return choice;
}

//logic for determining winner after 5 rounds
function conclusion(finalPlayer, finalComputer){
    let winner = "";
    if (finalPlayer > finalComputer){
        winner = "You are";
    } else {
        winner = "The computer is";
    }
    document.getElementById("finalConclusion").innerHTML = `<h1>${winner} the grand champion!</h1>`;
}

//keeps and displays running tally, send to conclusion after 5 rounds
function runningTally(playerResult, computerResult) {
    playerScore += playerResult;
    computerScore += computerResult;
    document.getElementById("tally").innerHTML = `You: ${playerScore} &nbsp;&nbsp;&nbsp;&nbsp; Computer:  ${computerScore}`;
    round++;
    if (round%4 === 0){
        conclusion(playerScore, computerScore);
    }
}

function playRound (playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    document.getElementById("compChoice").innerHTML = `<h2>${computerSelection}</h2>`;

    //logic for who wins
    if (player == "rock" && computerSelection == "paper"){
        runningTally(0, 1);
        return `<h3>You lose!   Paper beats rock!</h3>`;
    } else if (player == "rock" && computerSelection == "scissors"){
        runningTally(1, 0);
        return `<h3>You win!   Rock beats scissors!</h3>`;
    } else if (player == "paper" && computerSelection == "rock"){
        runningTally(1, 0);
        return `<h3>You win!   Paper beats rock!</h3>`;
    } else if (player == "paper" && computerSelection == "scissors"){
        runningTally(0, 1);
        return `<h3>You loose!   Scissors beat paper!</h3>`;
    } else if (player == "scissors" && computerSelection == "rock"){
        runningTally(0, 1);
        return `<h3>You loose!   Rock beats scissors!</h3>`;
    } else if (player == "scissors" && computerSelection == "paper"){
        runningTally(1, 0);
        return `<h3>You win!   Scissors beat paper!</h3>`;
    } else {
        runningTally(1, 1);
        return `<h3>Tie!</h3>`;
    }
}

//eventListener to get user choice

const rock = document.getElementById("rock");
rock.addEventListener("click", () => { play(rock.value); });

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => { play(paper.value); });

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => { play(scissors.value); });

//function to display user choice, then play game
function play(userChoice){
    document.getElementById("yourChoice").innerHTML = `<h2>${userChoice} </h2>`;
    document.getElementById("result").innerHTML = `${playRound(userChoice, getComputerChoice())}`;
}


//IGNORING THIS OPTION FOR NOW
/*
function fiveRoundGame (){
playerScore = 0;
computerScore = 0;

for (let i=0; i<=5; i++){
    let userChoice= prompt("Rock, Paper, or Scissors?");
    let computerChoice = getComputerChoice();
    let gameResult = round(userChoice, computerChoice);
    console.log(gameResult);
    let winner = gameResult.substring(4, 7);
    if (winner === "win"){
        playerScore += 1;
    } else if (winner === "loo"){
        computerScore += 1;
    } else {
        playerScore +=1;
        computerScore+=1;
    }
}

console.log(`The computer won ${computerScore} games and you won ${playerScore} games `);
if (playerScore === computerScore){
    console.log("You tied this game!")
} else if (playerScore > computerScore){
    console.log("You won this game!");
} else {
    console.log("You lost this game!");
}
}
//keeping games to a single round for now
//fiveRoundGame();
*/