// computer randomly returns rock, paper, or scissors 
// player randomly returns rock, paper, or scissors 
// paper beats rock, scissor beats paper, rock beats scissors
// if they output the same option, return a string that says it's a tie 
// or return a string for winning or losing
// keep score for 5 rounds of a game. Whoever wins the most games out of 5 is the winner
// use prompt to get input from the user
// use loop to repeat function calls





const getComputerChoice = () => {

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



