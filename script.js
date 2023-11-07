// Create array with available choices //
const choices = ['rock', 'paper', 'scissors']
// Create a function to get computer choice. Rock/Paper/Scissors //
function getComputerChoice() {
    // Get random index from the array //
    const computerChoice = choices[Math.floor(Math.random()* choices.length)];
    return computerChoice;
}
// Ask user for his choice //
// If user types something different than rock/paper/scissors ask again //
// Compare user's choice to computer and print result //