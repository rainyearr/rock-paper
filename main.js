const choices = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanSelection) {
  const computerSelection = getComputerChoice();

  document.getElementById("humanChoice").textContent = humanSelection;
  document.getElementById("computerChoice").textContent = computerSelection;

  let result = determineWinner(humanSelection, computerSelection);
  document.getElementById("result").textContent = result;
  checkGameEnd();
}

function determineWinner(human, computer) {
  if (human === computer) return "It's a Tie!";

  const winConditions = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER",
  };

  if (winConditions[human] === computer) {
    humanScore++;
    return `You win! ${human} beats ${computer}. Score: ${humanScore} - ${computerScore}`;
  }

  computerScore++;
  return `You lose! ${computer} beats ${human}. Score: ${computerScore} - ${humanScore}`;
}

function checkGameEnd() {
  if (humanScore === 5 || computerScore === 5) {
    let finalResult =
      humanScore === 5
        ? `Game ends! Player Wins ${humanScore} - ${computerScore}`
        : `Game ends! Computer Wins ${computerScore} - ${humanScore}. Better luck next time`;

    document.getElementById("result").textContent = finalResult;
    humanScore = 0;
    computerScore = 0;
  }
}

["rock", "paper", "scissor"].forEach((choice) => {
  document
    .getElementById(choice)
    .addEventListener("click", () => playRound(choice.toUpperCase()));
});
