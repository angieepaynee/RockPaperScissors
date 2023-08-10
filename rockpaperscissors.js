
      


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
   const wMessage = document.getElementById('winningMessage');
   const lMessage = document.getElementById('losingMessage');
   const tMessage = document.getElementById('tieMessage');
   const tRound = document.getElementById('tieRound');
   const wRound = document.getElementById('winRound');
   const lRound = document.getElementById('loseRound');
   
   //const buttons = document.querySelectorAll('.mainButtons');



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

  

   // play a round. Make messages for winning and losing so that i can remove them from the dom when 
   // I want to display the final winning/losing message
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

   // deciding who is the winner. don't want a return statement since it stops code execution
   function winner() {
      if (playerScore > 5) {
         wMessage.textContent = "You win the game! Yay!";
      } else if (computerScore > 5) {
         lMessage.textContent = "You have lost, better luck next time.";
      } else {
         tMessage.textContent = "Nobody wins, it's a tie!";
      }
   };

   winner();

   //reset game
   function resetGame() {
      //reset all global variables
      //remove all event listeners (make a list to loop through them?)
      //calls the main game function when player wants to start again --- MAKE START BUTTON EVENTUALLY
      
      playerScore = 0;
      computerScore = 0;
      scoreElement.removeChild(scores);
      resultsElement.removeChild(results);
      choicesElement.removeChild(choices);
   }
   

};
game();    
      


