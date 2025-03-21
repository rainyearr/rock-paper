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

function playRound(humanSelection) {
  let computerSelection = getComputerChoice(choice).toUpperCase();
  let result = "";

  document.getElementById("humanChoice").textContent = humanSelection;
  document.getElementById("computerChoice").textContent = computerSelection;
  if (humanSelection === computerSelection) {
    result = "It's a Tie!";
    console.log("It's a tie");
  } else if (
    (humanSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (humanSelection === "PAPER" && computerSelection === "ROCK") ||
    (humanSelection === "SCISSOR" && computerSelection === "PAPER")
  ) {
    result = `You win ${humanSelection} beats ${computerSelection}`;
  } else {
    result = `You lose! ${computerSelection} beats ${humanSelection}`;
  }

  // console.log(result);
  document.getElementById("result").textContent = result;
}

//Attach Event listeners to the buttons
document.getElementById("rock").addEventListener("click", () => {
  playRound("ROCK");
});
document.getElementById("paper").addEventListener("click", () => {
  playRound("PAPER");
});
document.getElementById("scissor").addEventListener("click", () => {
  playRound("SCISSOR");
});
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   // for (let i = 0; i < 5; i++) {
//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice(choice).toUpperCase();

//   console.log("Human: " + humanSelection + "\nComputer: " + computerSelection);

//   let winner = playRound(humanSelection, computerSelection);

//   if (winner === "Player") {
//     humanScore++;
//     console.log(`Player wins this round. New score is ${humanScore}`);
//   } else if (winner === "Computer") {
//     computerScore++;
//     console.log(`Computer wins this round. New score is ${computerScore}`);
//   } else {
//     console.log("It's a tie!");
//   }

//   console.log("\nFinal Results:");

//   if (humanScore > computerScore) {
//     console.log(
//       `Player wins the game! Final score is: ${humanScore} - ${computerScore}`
//     );
//   } else if (computerScore > humanScore) {
//     console.log(
//       `Computer wins the game! Final score is: ${computerScore} - ${humanScore}`
//     );
//   } else {
//     console.log("The game is a tie!");
//   }
// }

// playGame();
