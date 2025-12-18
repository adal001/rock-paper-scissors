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