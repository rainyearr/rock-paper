const choice = ["rock", "paper", "scissor"];

function getComputerChoice(arr) {
  if (arr.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * arr.length);

  //   console.log(randomIndex);
  return arr[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ");

  return humanChoice.toUpperCase();
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (humanSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (humanSelection === "PAPER" && computerSelection === "ROCK") ||
    (humanSelection === "SCISSOR" && computerSelection === "PAPER")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice(choice).toUpperCase();

    console.log(
      "Human: " + humanSelection + "\nComputer: " + computerSelection
    );

    let winner = playRound(humanSelection, computerSelection);

    if (winner === "Player") {
      humanScore++;
      console.log(`Player wins this round. New score is ${humanScore}`);
    } else if (winner === "Computer") {
      computerScore++;
      console.log(`Computer wins this round. New score is ${computerScore}`);
    } else {
      console.log("It's a tie!");
    }
  }

  console.log("\nFinal Results:");

  if (humanScore > computerScore) {
    console.log(
      `Player wins the game! Final score is: ${humanScore} - ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer wins the game! Final score is: ${computerScore} - ${humanScore}`
    );
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
