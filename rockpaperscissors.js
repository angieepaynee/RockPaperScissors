// computer randomly returns rock, paper, or scissors 
// player randomly returns rock, paper, or scissors 
// paper beats rock, scissor beats paper, rock beats scissors
// if they output the same option, return a string that says it's a tie 
// or return a string for winning or losing
// keep score for 5 rounds of a game. Whoever wins the most games out of 5 is the winner
// use prompt to get input from the user
// use loop to repeat function calls
// if computer chooses paper and player1 chooses rock, alert you win
// if computer choose scissors and player 1 chooses paper, alert you win
// if computer chooses rock and player chooses scissors, alert you win


let message1 = "you lose!";
let message2 = "you win!";
let playerSelection = prompt("Would you like to choose rock, paper, or scissors?", " ");
const computerSelection = getComputerChoice();

function getComputerChoice() {
   const gameOptions = Math.random() *3;
   
   if (gameOptions < 1) {
           return "rock";
           } else if (gameOptions < 2) {
              return "paper";
           } else {
              return "scissors";
           }
   };

getComputerChoice();
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

   if(computerSelection == "paper" && playerSelection == "rock" 
   || computerSelection == "scissors" && playerSelection == "paper"
   || computerSelection == "rock" && playerSelection == "scissors") {
   alert(message2);
   } 

   else if(playerSelection == "rock" && computerSelection == "paper" 
   || playerSelection == "paper" && computerSelection == "scissors" 
   || playerSelection == "scissors" && computerSelection == "rock" ) {
   alert(message1);
   }}


console.log(playRound(playerSelection, computerSelection));

// if(getComputerChoice == "paper" && playerChoice == "rock")
// alert(message2);
// } else if(getComputerChoice == "scissors" && playerChoice == "paper") {
// } alert(message2); {
//    else if(getComputerChoice == "rock" && playerChoice == "scissors") {
//       alert(message2);
//    }
// }
