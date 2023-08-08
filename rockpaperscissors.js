// initialize initial scores
// update the score when a player wins a round
//when person wins game,add 1 point. when computer wins game, add point.
//remember to display scores on screen
//whoever has the most points out of 5, wins. end game.
//game ends after 5 rounds and display final scores and declare winner

function game() {
   let playerSelection = prompt("Would you like to choose rock, paper, or scissors? ");   
   let playerScore = 0;
   let computerScore = 0;
   
   // for(let i = 0; i < 5; i++) {
   //    let computerSelection = getComputerChoice();
   //    function getComputerChoice() {
   //       const gameOptions = (Math.floor(Math.random() * 3));
         
   //       if (gameOptions === 0) {
   //               return "rock";
   //               } else if (gameOptions === 1) {
   //                  return "paper";
   //               } else {
   //                  return "scissors";
   //               }
         
   const btnRock = document.createElement('button');
   btnRock.textContent = "Rock";
   btnRock.addEventListener('click', () => {
      playRound(playerSelection, getComputerChoice());
      console.log(btnRock);
   });

   const btnPaper = document.createElement('button');
   btnPaper.textContent = "Paper";
   btnPaper.addEventListener('click', () => {
      playRound(playerSelection, getComputerChoice());
      console.log(btnPaper);
   });

   const btnScissors = document.createElement('button');
   btnScissors.textContent = "Scissors";
   btnScissors.addEventListener('click', () => {
      playRound(playerSelection, getComputerChoice());
      console.log(btnScissors);
   });


   };

  
      function playRound(playerSelection, computerSelection) {
      
         if (playerSelection === "rock") {
            if (computerSelection === "paper") {
               computerScore++;
               return "You lose!";
            } else if (computerSelection === "rock") {
               return "It's a tie!";
            } else if (computerSelection === "scissors") {
               playerScore++;
               return "You win!";
            }
         } else if (playerSelection === "paper") {
            if (computerSelection === "paper") {
               return "It's a tie!";
            } else if (computerSelection === "rock") {
               playerScore++;
               return "You win!";
            } else if (computerSelection === "scissors") {
               computerScore++;
               return "You lose!";
            }
         } else if (playerSelection === "scissors") {
            if (computerSelection === "scissors") {
               return "It's a tie!";
            } else if (computerSelection === "rock") {
               computerScore++;
               return "You lose!";
            } else if (computerSelection === "paper") {
               playerScore++;
               return "You win!";
            }
         } };
         const resultsElement = document.createElement('div');
         const result = playRound(playerSelection, computerSelection);
         resultsElement.textContent = result;

         const choicesElement = document.createElement('div');
         const choice = "Player choice: " + playerSelection.toLowerCase() + 
                               " | " + "Computer choice: " + computerSelection;
         choicesElement.textContent = choice;

         const scoreElement = document.createElement('div');
         const score = "Player Score: " + playerScore + " | " + 
                       "Computer Score: " + computerScore;
         scoreElement.textContent = score;


         document.body.appendChild(resultsElement);
         document.body.appendChild(choicesElement);
         document.body.appendChild(scoreElement);
   //}

   function winner() {
      if (playerScore > computerScore) {
         return "You win the game! Yay!";
      }
      else if (computerScore > playerScore) {
         return "Better luck next time";
      } else {
         return "Nobody wins!"
      }
   } 
   const winnerElement = document.createElement('div');
   const winner = winner();
   winnerElement.textContent = winner;
   document.body.appendChild(winnerElement);
//};

game();


