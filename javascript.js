// Set computer choice:
function getComputerChoice() {
    // Get a random number between 1 and 3:
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // Associate each number with each choice and return one of them:
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Set human choice:
function getHumanChoice() {
    // Ask user for their choice:
    const humanChoice = prompt("What's your choice?");
    // Return their choice:
    return humanChoice;
}

// Keep track of the players score:
let humanScore = 0;
let computerScore = 0;

// Logic to play a round of the game:
function playRound(humanChoice, computerChoice) {
    // Make human choice lower case to make different variations of input work:
    humanChoice = humanChoice.toLowerCase();
    // Tie / User wins / Computer wins:
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! ${humanChoice} loves ${computerChoice}!`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
}

// Use the human and computer choices to play a round of the game:
const humanSelection = getHumanChoice();
console.log(`Your choice: ${humanSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer's choice: ${computerSelection}`);

playRound(humanSelection, computerSelection);