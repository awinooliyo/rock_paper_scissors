function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        console.log("Invalid choice, please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return 'human';
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return 'computer';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);

        if (winner === 'human') {
            humanScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }

        console.log(`Round ${i + 1}: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();
