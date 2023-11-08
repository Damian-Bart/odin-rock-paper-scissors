// Create array with available choices //
const choices = ['rock', 'paper', 'scissors']

// Create a function to get computer choice. Rock/Paper/Scissors //
function getComputerChoice() {

    // Get random index from the array //
    const computerChoice = choices[Math.floor(Math.random()* choices.length)];
    return computerChoice;

// Create a function to get user's choice. Only one of the items from the array //
function getUserChoice() {
    const userChoice = prompt('Please choose rock/paper/scissors: ').toLowerCase();
    // Create while loop to check if user's choice is valid //
    while (!choices.includes(userChoice)) {
        const userChoice = prompt('Invalid input. Please enter Rock/Paper/Scissors: '); 
    }
    return userChoice;
}
function playRound(userChoice, computerChoice) {
    
    // Save computer choice to a variable //
    const computerChoice = getComputerChoice();
    // Save user choice to a varaible //
    const userChoice = getUserChoice();

     // Compare user's choice to computer and print result //
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock')) {
        return `You Lose! ${computerChoice} beats ${userChoice}`;
    } else {
        return `You Win! ${userChoice} beats ${computerChoice}`;
    }   
}
