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
document.getElementById("compChoice").innerHTML = `The computer chose ${computerSelection}`;

//logic for who wins
if (player == "rock" && computerSelection == "paper"){
    return "You lose! Paper beats rock!";
} else if (player == "rock" && computerSelection == "scissors"){
    return "You win! Rock beats scissors!";
    return "You win! Paper beats rock!";
} else if (player == "paper" && computerSelection == "scissors"){
    return "You loose! Scissors beat paper!";
} else if (player == "scissors" && computerSelection == "rock"){
    return "You loose! Rock beats scissors!";
} else if (player == "scissors" && computerSelection == "paper"){
    return "You win! Scissors beat paper!";
} else {
    return "Tie!";
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
    document.getElementById("yourChoice").innerHTML = `You chose: <h2> ${userChoice} </h2>`;
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