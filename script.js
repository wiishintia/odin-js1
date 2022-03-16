const arr = ["rock", 'paper', 'scissor'];
function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let userScore =0;
let computerScore =0;

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return("It's a tie");
    } else if (playerSelection =="rock"){
        if (computerSelection == "paper"){
            computerScore++;
            return("You lose, paper beat rock");
        } else {
            userScore++;
            return("You win, rock beat scissor");
        }
    } else if (playerSelection =="paper"){
        if (computerSelection =="scissor"){
            computerScore++;
            return("You lose, scissor beat paper");
        } else {
            userScore++;
            return("You win, paper beat rock");
        }
    } else if (playerSelection =="scissor"){
        if (computerSelection =="paper"){
            userScore++;
            return("You win, scissor beat paper");
        } else {
            computerScore++;
            return("You lose, rock beat scissor");
        }
    }


}



function game(){
    let totalScore =0;
    for (let i = 1; i<6;i++){
        var playerSelection = window.prompt("rock, paper,scissor, play!").toLowerCase();
        var computerSelection = computerPlay(arr);
        console.log("game "+i+ ":"+ playRound(playerSelection,computerSelection));
        totalScore += userScore; 
    }
    console.log(totalScore);
}


game();