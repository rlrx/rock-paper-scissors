function getComputerChoice() {
    let choicelist = ['rock', 'paper', 'scissors'];
    let computerSelection = choicelist[Math.floor(Math.random() * choicelist.length)];
    return computerSelection;
}

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

function game() {
    let counter = 5;
    let points = 0;
    while(counter > 0){
        let playerSelection = prompt("scissors, paper or stone?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result == "You Win! Rock beats Scissors" || result == "You Win! Paper beats Rock" || result ==  "You Win! Scissors beats Paper"){
            points += 1;
        }
        counter -= 1;
    }
    console.log(`You got ${points}/5!`);
}

game();