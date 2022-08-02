//eventListener to get user choice
const userChoice = "";
const rock = document.querySelector('#rock');
rock.onclick= () => alert("You chose Rock!");
const paper = document.querySelector('#paper').value;
const scissors = document.querySelector('#scissors').value;



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
console.log()

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
