let playerPrompt = prompt("Would you like to choose rock, paper, or scissors?", " ");



let min = 0;
let max = 3;

function getComputerChoice() {
   const gameOptions = (Math.floor(Math.random() * (max-min + 1)) + min);
   
   if (gameOptions === 0) {
           return "rock";
           } else if (gameOptions === 1) {
              return "paper";
           } else {
              return "scissors";
           }
   };


console.log(getComputerChoice());
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

   if (
     (computerSelection === "paper" && playerSelection === "rock") ||
     (computerSelection === "scissors" && playerSelection === "paper") ||
     (computerSelection === "rock" && playerSelection === "scissors") 
    ) {
      alert("You lose!"); 
   } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection == "scissors" && computerSelection === "rock") 
   ) {
      alert("you win!");
   } else {
      alert("it's a tie!");
   }
}

const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));

// let playerScore = 0;
// let computerScore = 0;


// function game() {
//    for (let i = 0; i <= 5; i++) {
// }
// }
// console.log();


