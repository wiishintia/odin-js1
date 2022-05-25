let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const userChoice_div = document.getElementById('user-choice');
const computerChoice_div = document.getElementById('computer-choice');
const scoreboard_div = document.querySelector('.scoreboard')
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const userChoice_img = document.getElementById('user-choice-img');
const computerChoice_img = document.getElementById('computer-choice-img');
const popup_div = document.getElementById('popup');
const message_p = document.getElementById('message');
const restart_btn = document.getElementById('restart-btn');
const overlay_div = document.getElementById('overlay')

//2nd: get computer choice
function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function displayChoices(userChoice,computerChoice){
    switch (userChoice){
        case 'r': 
            userChoice_img.src ='./images/rock.png';
            break;
        case 'p':
            userChoice_img.src = './images/paper.png';
            break;
        case 's':
            userChoice_img.src = './images/scissor.png';
            break;
    }
    switch (computerChoice){
        case 'r': 
            computerChoice_img.src = './images/rock.png';
            break;
        case 'p':
            computerChoice_img.src = './images/paper.png';
            break;
        case 's':
            computerChoice_img.src = './images/scissor.png';
            break;
    }
} 


function convertToWord(letter){
    if (letter === 'r') return 'rock';
    if (letter === 'p') return 'paper';
    return 'scissor';
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} draw to ${convertToWord(computerChoice)}. It's a draw!`
}

function gameOver(){
    return userScore === 5 || computerScore === 5
}

function openPopUp(){
    popup_div.classList.add('active');
    overlay_div.classList.add('active');
}

function setMessage(){
    return userScore > computerScore
        ? (message_p.textContent ='You WON!!')
        : (message_p.textContent = 'You Lost!!')
}

function restartGame(){
    userScore = 0;
    computerScore = 0;
    userChoice_img.src = "./images/question.png";
    computerChoice_img.src = "./images/question.png";
    userScore_span.textContent = '0';
    computerScore_span.textContent = '0';
    result_p.textContent = "Make your move!"
    popup_div.classList.remove('active');
    overlay_div.classList.remove('active')
}

//3rd : decide who win
function game(userChoice){
    const computerChoice = getComputerChoice(); 
    displayChoices(userChoice,computerChoice);
    switch (userChoice+computerChoice){
        case 'pr':
        case 'sp':
        case 'rs':
            win(userChoice,computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,computerChoice);
            break;
    }
    if (gameOver()) {
        openPopUp()
        setMessage()
    }
}


//1st : get user choice
function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    });
    paper_div.addEventListener('click', function(){
        game('p');
    });
    scissor_div.addEventListener('click', function(){
        game('s');
    });
    restart_btn.addEventListener('click', restartGame);
}

main();
