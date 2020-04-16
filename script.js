let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
function compareGuesses (userGuess,computerGuess,targetNumber) {
  userTarget = Math.abs(userGuess - targetNumber);
  computerTarget = Math.abs(computerGuess - targetNumber);  
  if(userTarget === computerTarget) {
    return true;
  } else if (userTarget < computerTarget) {
    return true;
  } else {
    return false;
  }
}
function updateScore(winner) {
  if(winner === 'human') {
    humanScore += 1;
  } else if(winner === 'computer') {
    computerScore += 1;
  }
}
function advanceRound() {
  currentRoundNumber += 1;
}