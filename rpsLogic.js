//get a random choice of rock, paper, or scissors
function getComputerChoice(){
choice = 0;
random = Math.floor(Math.random() * 3);
if (random === 0) {
    choice = 'rock';
} else if (random === 1) {
    choice = 'paper';
} else{
    choice = 'scissors';
}
return choice;
}

function round (playerSelection, computerSelection){
player = playerSelection.toLowerCase();
document.getElementById("compChoice").innerHTML = `<h2>${computerSelection}</h2>`;

//logic for who wins
if (player == "rock" && computerSelection == "paper"){
    return `<h1>You lose!   Paper beats rock!</h1>`;
} else if (player == "rock" && computerSelection == "scissors"){
    return `<h1>You win!   Rock beats scissors!</h1>`;
} else if (player == "paper" && computerSelection == "rock"){
    return `<h1>You win!   Paper beats rock!</h1>`;
} else if (player == "paper" && computerSelection == "scissors"){
    return `<h1>You loose!   Scissors beat paper!</h1>`;
} else if (player == "scissors" && computerSelection == "rock"){
    return `<h1>You loose!   Rock beats scissors!</h1>`;
} else if (player == "scissors" && computerSelection == "paper"){
    return `<h1>You win!   Scissors beat paper!</h1>`;
} else {
    return `<h1>Tie!</h1>`;
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
    document.getElementById("result").innerHTML = `${round(userChoice, getComputerChoice())}`;
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