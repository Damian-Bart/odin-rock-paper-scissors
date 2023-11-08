// Create array with available choices //
const choices = ['rock', 'paper', 'scissors']

// Create a function to get computer choice. Rock/Paper/Scissors //
function getComputerChoice() {

    // Get random index from the array //
    const computerChoice = choices[Math.floor(Math.random()* choices.length)];
    return computerChoice;
}
function playRound(userChoice, computerChoice) {
    
    // Ask user for their choice //
    userChoice = prompt('Please choose rock/paper/scissors: ').toLowerCase(); 
    
    // Save computer choice to a variable //
    computerChoice = getComputerChoice();
    
     // Compare user's choice to computer and print result //
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock')) {
        return `You Lose! ${computerChoice} beats ${userChoice}`;
    } else {
        return `You Win! ${userChoice} beats ${computerChoice}`;
    }   
}
