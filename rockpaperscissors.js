// get a random choice for the computer
function getComputerChoice() {
    let choicelist = ['rock', 'paper', 'scissors'];
    let computerSelection = choicelist[Math.floor(Math.random() * choicelist.length)];
    return computerSelection;
}

// compare computer choice against player choice
function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock'){
        if(computerSelection == 'rock'){
            let result = "Draw!";
            return result;
        }
        else if(computerSelection == 'paper'){
            let result = "You Lose! Paper beats Rock";
            return result;
        }
        else if(computerSelection == 'scissors'){
            let result = "You Win! Rock beats Scissors";
            return result;
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            let result = "You Win! Paper beats Rock";
            return result;
        }
        else if(computerSelection == 'paper'){
            let result = "Draw!";
            return result;
        }
        else if(computerSelection == 'scissors'){
            let result = "You Lose! Scisssors beats Paper";
            return result;
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            let result = "You Lose! Rock beats Scissors";
            return result;
        }
        else if(computerSelection == 'paper'){
            let result = "You Win! Scissors beats Paper";
            return result;
        }
        else if(computerSelection == 'scissors'){
            let result = "Draw!";
            return result;
        }
    }
}

let playerpoints = 0;
let computerpoints = 0;

// add eventlisteners for the buttons that calls the playRound function (takes in playerSelection and computerSelection)
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = button.textContent; // each time the button is clicked, save the playerSelection
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection); // call playRound to evaluate the results
        const div = document.querySelector('div.results');
        div.textContent = `${result}`;
        if(result == "You Win! Rock beats Scissors" || result == "You Win! Paper beats Rock" || result ==  "You Win! Scissors beats Paper"){
            playerpoints += 1;
        }
        else if(result != "Draw!"){
            computerpoints += 1;
        }
        const displaypoints = document.querySelector('div.finalresults');
        if(playerpoints == 5){
            displaypoints.textContent = "You won 5 points! You are the winner!!!";
            playerpoints = 0;
            computerpoints = 0;
        }
        else if(computerpoints == 5){
            displaypoints.textContent = "Computer won 5 points! You lose!!!";
            playerpoints = 0;
            computerpoints = 0;
        }
        else{
            displaypoints.textContent = "Choose an option!";
        }
})});
