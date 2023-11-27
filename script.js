// Create array with available choices //
const choices = ['rock', 'paper', 'scissors'];


// Create a function to get computer choice. Rock/Paper/Scissors //
function getComputerChoice() {

    // Get random index from the array //
    const computerChoice = choices[Math.floor(Math.random()* choices.length)];
    return computerChoice;
}


// Create a function to get user's choice. Only one of the items from the array //
// function getUserChoice() {
//     const userChoice = prompt('Please choose rock/paper/scissors: ').toLowerCase();

//     // Create while loop to check if user's choice is valid //
//     while (!choices.includes(userChoice)) {
//         userChoice = prompt('Invalid input. Please enter Rock/Paper/Scissors: ').toLowerCase(); 
//     }
//     return userChoice;
// }


// Save computer choice to a variable //
const computerChoice = getComputerChoice();
// Save user choice to a varaible //
const userChoice = getUserChoice();


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

// Create a funtion to play a game //
// function game() {

//     // Create round counter //
//     let roundCount = 0; 
//     // Create win counter //
//     let winCount = 0;
//     // Create lose counter //
//     let loseCount = 0;

    // Create while loop that works until user wins or loses 5 rounds //
    // while (roundCount < 5) {
    //     const result = playRound(userChoice, computerChoice);
    //     roundCount += 1;
    //     if (result.includes("Win")) {
    //         winCount += 1;
    //     } else if (result.includes("Lose")) {
    //         loseCount += 1;
    //     }
    // }

    // Return the result //
//     if (winCount > loseCount) {
//         return 'You won!'; 
//     } else {
//         return 'You lost...';
//     }
// }

const buttons = document.querySelectorAll('button');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const sciBtn = document.getElementById('scissors');