 //whole game function
function game() {
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
   const buttonContainer = document.getElementById("buttonContainer");
      
   let computerSelection = getComputerChoice();

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

   function updateScores() {
      const playerScoreElement = document.getElementById('player-score');
      const computerScoreElement = document.getElementById('computer-score');

      playerScoreElement.textContent = `Player Score: ${playerScore}`;
      computerScoreElement.textContent = `Computer Score: ${computerScore}`;
   };

   function updateChoice() {
      const playerChoiceElement = document.getElementById('player-choice');
      const computerChoiceElement = document.getElementById('computer-choice');
      playerChoiceElement.textContent = `Player Choice: ${playerSelection}`;
      computerChoiceElement.textContent = `Computer Choice: ${computerSelection}`;
   };

   function updateDisplay() {
      computerSelection = getComputerChoice();
      //call playRound to determine the result of the round
      //the result variable holds the outcome of the round
      //update textContent to display results in UI
      resultsElement.textContent = playRound(playerSelection, computerSelection);
      winnerElement.textContent = winner();
      // const winnerResult = winner();
      // winnerElement.textContent = winnerResult; 
      document.body.appendChild(resultsElement);
      document.body.appendChild(choicesElement);
      document.body.appendChild(scoreElement);
      document.body.appendChild(winnerElement);
      updateChoice();
      updateScores();

   };
         
   //connect buttons to rounds so every time they are clicked a round is played
   const btnRock = document.getElementById("rock");
   btnRock.addEventListener('click', () => {
      playerSelection = "rock";
      updateDisplay(); 
   });

   const btnPaper = document.getElementById("paper");
   btnPaper.addEventListener('click', () => {
      playerSelection = "paper";
      updateDisplay(); 
      
   });

   const btnScissors = document.getElementById("scissors");
   btnScissors.addEventListener('click', () => {
      playerSelection = "scissors";
      updateDisplay();
   });


   // play a round.  
   function playRound(playerSelection) {

      if (playerSelection === "rock") {
         if (computerSelection === "paper") {
            computerScore++;
            return "You lose this round";
         } else if (computerSelection === "rock") {
            return "It's a tie!";
         } else if (computerSelection === "scissors") {
            playerScore++;
            return "you win this round!";
         }
      } else if (playerSelection === "paper") {
         if (computerSelection === "paper") {
            return "It's a tie!";
         } else if (computerSelection === "rock") {
            playerScore++;
            return "you win this round!";
         } else if (computerSelection === "scissors") {
            computerScore++;
            return "You lose this round";
         }
      } else if (playerSelection === "scissors") {
         if (computerSelection === "scissors") {
            return "It's a tie!";
         } else if (computerSelection === "rock") {
            computerScore++;
            return "You lose this round";
         } else if (computerSelection === "paper") {
            playerScore++;
            return "you win this round!";
         }
      } 
      };

   function createNewGameButton() {
      const newGame = document.createElement("button");
      newGame.textContent = "New Game?";
      newGame.style.cssText = "background-color: #00BFFF;" +
      "border: 2px solid black; margin: 0 auto;";

      newGame.addEventListener("click", resetGame);
      buttonContainer.appendChild(newGame);
      newGame.addEventListener("click", () => location.reload());
   };

   function removeNewGameButton() {
      while (buttonContainer.firstChild) {
         buttonContainer.removeChild(buttonContainer.firstChild);
      }  
   };

   function disableButtons() {
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
   };

   function updateNewGameButton() {
      if (playerScore >= 5 || computerScore >= 5) {
         createNewGameButton();

      } else {
         removeNewGameButton();
      }
   };

   // deciding who is the winner. 
   function winner() {
      if (playerScore >= 5) {
         wMessage.textContent = "You win the game! Yay!";
         disableButtons();
      } else if (computerScore >= 5) {
         lMessage.textContent = "You have lost, better luck next time.";
         disableButtons();
      } else if (playerScore === 5 && computerScore === 5) {
         tMessage.textContent = "Nobody wins, it's a tie!";
      }
      updateNewGameButton();
   };

   winner();


   // //reset game
   function resetGame() {
      //reset all global variables
      //remove all event listeners
      computerScore = 0;
      playerSelection = "";
      scoreElement.remove();
      resultsElement.remove();
      choicesElement.remove();
   };

};
game();    
      


