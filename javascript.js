// Set computer choice by randomly choosing one of the 3 options:
function getComputerChoice() {    
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Set human choice by asking the user for it:
function getHumanChoice() {
    const humanChoice = prompt("What's your choice?");

    return humanChoice;
}

// Capitalize the first letter of each choice:
function capitalize(choice) {
    choice = choice[0].toUpperCase() + choice.slice(1);

    return choice;
}

// Possible round outcomes:
const roundTie = "tie";
const roundWin = "win";
const roundLose = "lose";

// Logic to play a round of the game:
function playRound(humanChoice, computerChoice) {
    // Make human choice lower case to make different variations of input work:
    humanChoice = humanChoice.toLowerCase();
    // Tie / User wins / User loses:
    if (humanChoice === computerChoice) {
        const tieMessage =
            `Your choice: ${capitalize(humanChoice)}.\n` +
            `Computer's choice: ${capitalize(computerChoice)}.\n` +
            `This round is a tie! ${capitalize(humanChoice)} loves ` +
            `${capitalize(computerChoice)}!`;

        console.log(tieMessage);
        
        return roundTie;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        const winMessage =
            `Your choice: ${capitalize(humanChoice)}.\n` +
            `Computer's choice: ${capitalize(computerChoice)}.\n` +
            `You win this round! ${capitalize(humanChoice)} beats ` +
            `${capitalize(computerChoice)}!`;
        
        console.log(winMessage);
        
        return roundWin;
    } else {
        const loseMessage =
            `Your choice: ${capitalize(humanChoice)}.\n` +
            `Computer's choice: ${capitalize(computerChoice)}.\n` +
            `You lose this round! ${capitalize(computerChoice)} beats ` +
            `${capitalize(humanChoice)}!`;
        
        console.log(loseMessage);

        return roundLose;
    }
}

// Logic to play the whole game:
function playGame() {
    // Keep track of the players score:
    let humanScore = 0;
    let computerScore = 0;
    // Play 5 rounds of the game:
    for (let i = 1; i <=5; i++) {
        // Use human and computer choices to play a round and increase the scores:
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        const roundEnd = playRound(humanSelection, computerSelection);

        if (roundEnd === roundWin) {
            humanScore += 1;
        } else if (roundEnd === roundLose) {
            computerScore += 1;
        }
    }
    // Declare a winner:
    if (humanScore > computerScore) {
        const endWin =
            `Your final score is: ${humanScore}!\n` +
            `The computer's final score is: ${computerScore}.\n` +
            `HUMANITY WINS! COMPUTERS ARE TOASTERS!`;
        
        console.log(endWin);
    } else if (humanScore < computerScore) {
        const endLose =
            `The computer's final score is: ${computerScore}!\n` +
            `Your final score is: ${humanScore}.\n` +
            `COMPUTERS WIN! HUMANITY IS DOOMED!`;
        
        console.log(endLose);
    } else {
        const endTie =
            `The final scores are: ${humanScore} and ${computerScore}.\n` +
            `IT'S A TIE! HUMANITY AND COMPUTERS = BFF! 🤝`;
        console.log(endTie);
    }
}
// Have fun:
playGame();