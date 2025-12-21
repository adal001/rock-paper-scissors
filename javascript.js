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

// Play the game:
function playGame() {
    // Play 5 rounds of the game:
    for (let i = 1; i <=5; i++) {
        // Keep track of the players score:
        let humanScore = 0;
        let computerScore = 0;

        // Capitalize the first letter of each choice in the result of the game:
        function capitalizeFirstLetter(choice) {
            choice = choice[0].toUpperCase() + choice.slice(1);
            return choice;
        }

        // Logic to play a round of the game:
        function playRound(humanChoice, computerChoice) {
            // Make human choice lower case to make different variations of input work:
            humanChoice = humanChoice.toLowerCase();
            // Tie / User wins, set new score / User loses, set new score:
            if (humanChoice === computerChoice) {
                const tieMessage =
                    `Your choice: ${humanSelection}.\n` +
                    `Computer's choice: ${computerSelection}.\n` +
                    `It's a tie! ${capitalizeFirstLetter(humanChoice)} loves ${capitalizeFirstLetter(computerChoice)}!`;
                console.log(tieMessage);
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                humanScore += 1;
                const winMessage =
                    `Your choice: ${humanSelection}.\n` +
                    `Computer's choice: ${computerSelection}.\n` +
                    `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!\n` +
                    `Your score is: ${humanScore}.`;
                console.log(winMessage);
            } else {
                computerScore += 1;
                const loseMessage =
                    `Your choice: ${humanSelection}.\n` +
                    `Computer's choice: ${computerSelection}.\n` +
                    `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}!\n` +
                    `The computer's score is: ${computerScore}.`;
                console.log(loseMessage);
            }
        }
        
        // Use human and computer choices to play a round of the game:
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }
}

playGame();