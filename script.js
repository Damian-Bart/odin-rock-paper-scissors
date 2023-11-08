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
    let userChoice = prompt('Please choose rock/paper/scissors: ').toLowerCase(); 
    return userChoice;

    // Save computer choice to a variable //
    computerChoice = getComputerChoice();
    
    if (userChoice === computerChoice) {
        return "It's a tie!"
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return "You Lose! Paper beats rock!"
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return "You Win! Paper beats rock!"
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 
    }
    // Compare user's choice to computer and print result //
}