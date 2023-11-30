const choices = ["rock", "paper", 'scissors'];
let computerScore = 0;
let userScore = 0;
let winnerBoard = "Choose one option from the buttons above"

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
function updateScores() {
    userScoreHTML.textContent = userScore;
    computerScoreHTML.textContent = computerScore;
    winnerBoardHTML.textContent = winnerBoard;
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        winnerBoard = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ){
        computerScore += 1;
        winnerBoard = `You lose, ${computerChoice} beats ${userChoice}!`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        userScore += 1;
        winnerBoard = `You win, ${userChoice} beats ${computerChoice}!`;
    }
    updateScores();

    if (computerScore >= 5 || userScore >= 5) {
        endGame();
    }    
}

function endGame() {
    if (computerScore < userScore) {
        winnerBoard = "Congratulations, you have won!";
    } else {
        winnerBoard = "Sorry, you lost!"
    }
    computerScore = 0;
    userScore = 0;
    updateScores();
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const userScoreHTML = document.getElementById("userScore");
const computerScoreHTML = document.getElementById("computerScore");
const winnerBoardHTML = document.getElementById("winnerBoard");

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));

updateScores()