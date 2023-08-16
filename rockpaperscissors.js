 //whole game function
function game() {
   let playerScore = 0;
   let computerScore = 0;
   let playerSelection = "";

   const winnerElement = document.getElementById('winner');
   const scoreElement = document.getElementById('scores');
   const resultsElement = document.getElementById('results');
   const choicesElement = document.getElementById('choices');
   const wMessage = document.getElementById('winningMessage');
   const lMessage = document.getElementById('losingMessage');
   const tMessage = document.getElementById('tieMessage');  
   const buttonContainer = document.getElementById('buttonContainer');
   const roundWinner = document.getElementById('roundWinner');
   const roundLoser = document.getElementById('roundLoser');
   const roundTie = document.getElementById('roundTie');

      
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
      roundLoser.textContent = "";
      roundTie.textContent = "";
      roundWinner.textContent = "";

      computerSelection = getComputerChoice();
      //call playRound to determine the result of the round
      //the result variable holds the outcome of the round
      //update textContent to display results in UI
      resultsElement.textContent = playRound(playerSelection, computerSelection);
      winnerElement.textContent = winner();
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
            roundLoser.textContent = "You lose this round!";
         } else if (computerSelection === "rock") {
            roundTie.textContent = "It's a tie!";
         } else if (computerSelection === "scissors") {
            playerScore++;
            roundWinner.textContent = "You win this round!";
         }
      } else if (playerSelection === "paper") {
         if (computerSelection === "paper") {
            roundTie.textContent = "It's a tie!";
         } else if (computerSelection === "rock") {
            playerScore++;
            roundWinner.textContent = "You win this round!";
         } else if (computerSelection === "scissors") {
            computerScore++;
            roundLoser.textContent = "You lose this round!";
         }
      } else if (playerSelection === "scissors") {
         if (computerSelection === "scissors") {
            roundTie.textContent = "It's a tie!";
         } else if (computerSelection === "rock") {
            computerScore++;
            roundLoser.textContent = "You lose this round!";
         } else if (computerSelection === "paper") {
            playerScore++;
            roundWinner.textContent = "You win this round!";
         }
      } 
      };

   function createNewGameButton() {
      const newGame = document.createElement("button");
      newGame.textContent = "New Game?";
      newGame.style.cssText = `
      background-color: #B0E0E6;
      font-weight: 900;
      font-size: 64px;
      border-radius: 20px;
      box-shadow: #04d9ff 0 0 40px 20px,
      black 0 0 80px 40px;
      margin: 40px;
      border: 0.5px solid #04d9ff;
      text-shadow: 0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0, 0 0 40px #04d9ff, 0 0 50px #04d9ff, 0 0 60px #04d9ff, 0 0 70px #04d9ff;
      padding: 10px;
  `;
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
         roundWinner.remove();
         roundLoser.remove();
         roundTie.remove();
         disableButtons();
      } else if (computerScore >= 5) {
         lMessage.textContent = "You have lost, better luck next time.";
         roundWinner.remove();
         roundLoser.remove();
         roundTie.remove();
         disableButtons();
      } else if (playerScore === 5 && computerScore === 5) {
         tMessage.textContent = "Nobody wins, it's a tie!";
         roundWinner.remove();
         roundLoser.remove();
         roundTie.remove();
         disableButtons();

      }
      updateNewGameButton();
   };

   winner();

   // //reset game
   //reset all global variables
   //remove all event listeners
   function resetGame() {
      computerScore = 0;
      playerScore = 0;
      playerSelection = "";
      scoreElement.remove();
      resultsElement.remove();
      choicesElement.remove();
   };

};
game();    
      


