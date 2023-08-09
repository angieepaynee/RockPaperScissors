
      


 //whole game function
function game() {
   let computerSelection = getComputerChoice();
   let playerScore = 0;
   let computerScore = 0;
   let playerSelection = "";

   const scoreElement = document.getElementById('scores');
   const resultsElement = document.getElementById('results');
   const choicesElement = document.getElementById('choices');
   const winnerElement = document.getElementById('winner');



   //computer selection of rock, paper, or scissors
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
   
         
   //connect buttons to rounds so every time they are clicked a round is played
      const btnRock = document.getElementById("rock");
      btnRock.addEventListener('click', () => {
         playerSelection = "rock";
         const choice = "Player choice: " + playerSelection + 
                              " | " + "Computer choice: " + computerSelection;

         choicesElement.textContent = choice;
         const score = "Player Score: " + playerScore + " | " + 
                     "Computer Score: " + computerScore;
         scoreElement.textContent = score;
         const result = playRound(playerSelection, computerSelection);
         resultsElement.textContent = result;
   
         const winnerResult = winner();

         winnerElement.textContent = winnerResult;


         document.body.appendChild(resultsElement);
         document.body.appendChild(choicesElement);
         document.body.appendChild(scoreElement);
         document.body.appendChild(winnerElement);

         
      });

      const btnPaper = document.getElementById("paper");
      btnPaper.addEventListener('click', () => {
         playerSelection = "paper";
         const score = "Player Score: " + playerScore + " | " + 
                       "Computer Score: " + computerScore;
         scoreElement.textContent = score;
         const choice = "Player choice: " + playerSelection + 
                        " | " + "Computer choice: " + computerSelection;
         choicesElement.textContent = choice;
         const result = playRound(playerSelection, computerSelection);
         resultsElement.textContent = result;
         const winnerResult = winner();

         winnerElement.textContent = winnerResult;
         document.body.appendChild(resultsElement);
         document.body.appendChild(choicesElement);
         document.body.appendChild(scoreElement);
         document.body.appendChild(winnerElement);
      });

      const btnScissors = document.getElementById("scissors");
      btnScissors.addEventListener('click', () => {
         playerSelection = "scissors";
         const score = "Player Score: " + playerScore + " | " + 
                       "Computer Score: " + computerScore;
         scoreElement.textContent = score;

         const choice = "Player choice: " + playerSelection + 
                        " | " + "Computer choice: " + computerSelection;
         choicesElement.textContent = choice;
         const result = playRound(playerSelection, computerSelection);
         resultsElement.textContent = result;
         const winnerResult = winner();

         winnerElement.textContent = winnerResult;
         document.body.appendChild(resultsElement);
         document.body.appendChild(choicesElement);
         document.body.appendChild(scoreElement);
         document.body.appendChild(winnerElement);

      });

  

   // play a round
   function playRound(playerSelection, computerSelection) {
      computerSelection = getComputerChoice();

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

   // deciding who is the winner
   function winner() {
      if (playerScore > 5) {
         return "You win the game! Yay!";
      } else if (computerScore > 5) {
         return "Better luck next time";
      } else {
         return;
      }

   };


};
game();


   
   // for(let i = 0; i < 5; i++) {
    
      


