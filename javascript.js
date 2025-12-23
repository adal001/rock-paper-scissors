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

// Capitalize the first letter of each choice in the result of the game:
function capitalizeFirstLetter(choice) {
    choice = choice[0].toUpperCase() + choice.slice(1);
    return choice;
}

// Logic to play a round of the game:
function playRound(humanChoice, computerChoice) {
    // Make human choice lower case to make different variations of input work:
    humanChoice = humanChoice.toLowerCase();
    // Tie / User wins / User loses:
    if (humanChoice === computerChoice) {
        const tieMessage =
            `Your choice: ${humanChoice}.\n` +
            `Computer's choice: ${computerChoice}.\n` +
            `It's a tie! ${capitalizeFirstLetter(humanChoice)} loves ${capitalizeFirstLetter(computerChoice)}!`;
        console.log(tieMessage);
        return "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        const winMessage =
            `Your choice: ${humanChoice}.\n` +
            `Computer's choice: ${computerChoice}.\n` +
            `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`;
        console.log(winMessage);
        return "Win";
    } else {
        const loseMessage =
            `Your choice: ${humanChoice}.\n` +
            `Computer's choice: ${computerChoice}.\n` +
            `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}!`;
        console.log(loseMessage);
        return "Lose";
    }
}

// Play the game:
function playGame() {
    // Keep track of the players score:
    let humanScore = 0;
    let computerScore = 0;
    // Play 5 rounds of the game:
    for (let i = 1; i <=5; i++) {
        // Use human and computer choices to play a round of the game:
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        const gameEnd = playRound(humanSelection, computerSelection);

        if (gameEnd === "Win") {
            humanScore += 1;
        } else if (gameEnd === "Lose") {
            computerScore += 1;
        }
    }

    if (humanScore > computerScore) {
        const winEnding =
            `Your final score is: ${humanScore}!\n` +
            `The computer's final score is: ${computerScore}.\n` +
            `HUMANITY WINS! COMPUTERS ARE TOASTERS!`;
        console.log(winEnding);
    } else if (humanScore < computerScore) {
        const loseEnding =
            `The computer's final score is: ${computerScore}!\n` +
            `Your final score is: ${humanScore}.\n` +
            `COMPUTERS WIN! HUMANITY IS DOOMED!`;
        console.log(loseEnding);
    } else {
        const tieEnding =
            `The final scores are: ${humanScore} and ${computerScore}.\n` +
            `IT'S A TIE! HUMANITY AND COMPUTERS = BFF! 🤝`;
        console.log(tieEnding);
    }
}

playGame();