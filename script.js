// Create array with available choices //
const choices = ['rock', 'paper', 'scissors']
// Create a function to get computer choice. Rock/Paper/Scissors //
function getComputerChoice() {
    // Get random index from the array //
    const computerChoice = choices[Math.floor(Math.random()* choices.length)];
    return computerChoice;
}
// Ask user for their choice //
function getUserChoice () {
    let userChoice = prompt('Please choose rock/paper/scissors: '); 
    return userChoice;
}

console.log(getUserChoice())
// Compare user's choice to computer and print result //