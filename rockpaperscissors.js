let playerSelection = prompt("Would you like to choose rock, paper, or scissors?", " ");




function getComputerChoice() {
   const gameOptions = (Math.floor(Math.random() * 3));
   
   if (gameOptions === 0) {
           return "rock";
           } else if (gameOptions === 1) {
              return "paper";
           } else {
              return "scissors";
           }
   };


// function playRound(playerSelection, computerSelection) {

//    if (playerSelection.toLowerCase() === computerSelection) {
//       return "It's a tie!";
//    } 
   
//    if (
//       (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
//       (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
//       (playerSelection.toLowerCase() == "scissors" && computerSelection === "paper")
//    ) {
//       return "You win!";
//     } else if {
//       return "You lose!";
//    } 
   
//    if (
//      (computerSelection === "paper" && playerSelection === "rock") ||
//      (computerSelection === "scissors" && playerSelection === "paper") ||
//      (computerSelection === "rock" && playerSelection === "scissors") 
//    ) {
//       return "You lose!"; 
//    } else if {
//       return "You win!";
//    } 
// }


function playRound(playerSelection, computerSelection) {

   // if (playerSelection.toLowerCase() === computerSelection) {
   //    return "It's a tie!";
   // } 
   // else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
   //    return "you win!";
   // }
   // else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
   //    return "you win!";
   // }
   // else if (playerSelection.toLowerCase() == "scissors" && computerSelection === "paper") {
   //    return "you win!";
   // }
   // else if (playerSelection === "rock" && computerSelection === "paper") {
   //    return "You lose!"
   // }
   // else if (playerSelection === "paper" && computerSelection === "scissors") {
   //       return "You lose!"
   // }
   // else if (playerSelection === "scissors" && computerSelection === "rock") {
   //    return "You lose!";
   // }



   if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "paper") {
         return "You lose!";
      } else if (computerSelection === "rock") {
         return "It's a tie!";
      } else if (computerSelection === "scissors") {
         return "You win!";
      }
   } else if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection === "paper") {
         return "It's a tie!";
      } else if (computerSelection === "rock") {
         return "You win!";
      } else if (computerSelection === "scissors") {
         return "You lose!";
      }
   } else if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection === "scissors") {
         return "It's a tie!";
      } else if (computerSelection === "rock") {
         return "You lose!";
      } else if (computerSelection === "paper") {
         return "You win!";
      }
   } };
// Add conditions for other player selections (scissors, etc.) if needed


let computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));

// let playerScore = 0;
// let computerScore = 0;


// function game() {
//    for (let i = 0; i <= 5; i++) {
// }
// }
// console.log();


