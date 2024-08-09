// Create and append the heading
const heading = document.createElement('h1');
heading.textContent = 'The Famous Rock-Paper-Scissors Game';
document.body.appendChild(heading);

// Create and append the button container
const buttonContainer = document.createElement('div');
buttonContainer.id = 'buttons';

// Create and append buttons
['rock', 'paper', 'scissors'].forEach(choice => {
    const button = document.createElement('button');
    button.id = choice;
    button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
    buttonContainer.appendChild(button);
});

document.body.appendChild(buttonContainer);

// Create and append result and score divs
const resultDiv = document.createElement('div');
resultDiv.id = 'result';
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
scoreDiv.id = 'score';
scoreDiv.textContent = 'Human: 0, Computer: 0';
document.body.appendChild(scoreDiv);

// Game logic
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    document.getElementById("result").textContent = result;
    document.getElementById(
        "score"
    ).textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
}

// Add event listeners to buttons
document
    .getElementById("rock")
    .addEventListener("click", () => playRound("rock"));
document
    .getElementById("paper")
    .addEventListener("click", () => playRound("paper"));
document
    .getElementById("scissors")
    .addEventListener("click", () => playRound("scissors"));