// Create array with available choices //
const choices = ['rock', 'paper', 'scissors'];


// Create a function to get computer choice. Rock/Paper/Scissors //
function getComputerChoice() {

    // Get random index from the array //
    const computerChoice = choices[Math.floor(Math.random()* choices.length)];
    return computerChoice;
}



// Save computer choice to a variable //
const computerChoice = getComputerChoice();

// Create a function to play a round //
function playRound(userChoice, computerChoice) {
    
     // Compare user's choice to computer and print result //
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'rock')) {
        return `You Lose! ${computerChoice} beats ${userChoice}`;
    } else {
        return `You Win! ${userChoice} beats ${computerChoice}`;
    }   
}


const buttons = document.querySelectorAll('button');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const sciBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', playRound('rock', computerChoice));
paperBtn.addEventListener('click', playRound('paper', computerChoice));
sciBtn.addEventListener('click', playRound('scissors', computerChoice));