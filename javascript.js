/* Get computer choice with a function that randomly returns "rock", "paper" or
"scissors". */

function getComputerChoice() {
    // Get a random number between 1 and 3.
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // Set each number to each choice and return one of them.
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Ask the user for their choice and return it.

function getHumanChoice() {
    // Ask the user for their choice.
    const userChoice = prompt("What's your choice?");
    // Return their choice.
    return userChoice;
}

// Keep track of the players score with variables.

let humanScore = 0;
let computerScore = 0;

// Logic to play a round of the game:
function playRound(humanChoice, computerChoice) {
    // Make human choice lower case to make different variations of input work:
    humanChoice = humanChoice.toLowerCase();
    // Computer chooses rock:
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats Rock!");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats Scissors!");
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("It's a tie! Rock loves Rock!");
    } // Computer chooses paper:
      else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats Paper!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats Rock!");
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("It's a tie! Paper loves Paper!");
    } // Computer chooses scissors:
      else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats Scissors!");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beats Paper!");
    } else {
        console.log("It's a tie! Scissors loves Scissors!");
    }
}

// Use the human and computer choices to play a round of the game:
const humanSelection = getHumanChoice();
console.log(`Your choice: ${humanSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer's choice: ${computerSelection}`);

playRound(humanSelection, computerSelection);