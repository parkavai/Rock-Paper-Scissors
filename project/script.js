let playerScore = 0;
let computerScore = 0;
let totalRounds = 5;

const scoreText = document.getElementById("scoreText");
const statusText = document.getElementById("statusText");
const buttons = document.querySelectorAll('.click');

// Initalize the game 
const game = () =>{
    statusText.innerHTML = "First round to 5";
    buttons.forEach(button => button.addEventListener('click', playGame));
}

/**
 * Based on the button which is clicked, the winner of the round will be announced and we also have to ensure 
 * wether we have reached the total amount of rounds
 */
const playGame = (e) => {
    buttonClick = e.target.id;
    player = playerChoice(buttonClick);
    computer = computerChoice();
    winner(player,computer);
    if(totalRounds == 0){
        gameOver(playerScore, computerScore)
    }
}

// Updates the score after each round
const updateScore = () =>{
    scoreText.innerHTML = `${playerScore} : ${computerScore}`;
    statusText.innerHTML = `Rounds left: ${totalRounds}`;
}

// Inserts the image based on player choice
const playerChoice = (click) => {
    const player_image = document.getElementById("user_image");

    if(click == "Rock"){
        player_image.src = "rock.png";
        return 'rock';
    }
    else if(click == "Paper"){
        player_image.src = "paper.png";
        return 'paper';
    }
    else if(click == "Scissors"){
        player_image.src = "scissor.png";
        return 'scissors';
    }

}

// Selects a random choice 
const computerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    const computer_image = document.getElementById("cpu_image");

    if(number < 1){
        computer_image.src = "rock.png";
        return 'rock';
    }
    else if(number < 2){
        computer_image.src = "paper.png";
        return 'paper';
    }
    else {
        computer_image.src = "scissor.png";
        return 'scissors';
    }
}

/** 
 * Winner is chosen through the rules of "Rock, Paper and Scissors", which is displayed as follows:
 * Rock beats Scissors
 * Scissors beats Paper
 * Paper beats Rock
 */
const winner = (player, computer) => { 
    if(player == computer){
        totalRounds -= 1;
    }
    else {
        if(player == 'rock'){
            if(computer == 'scissors'){
                totalRounds -= 1;
                playerScore += 1;
            }
            else{
                totalRounds -= 1;
                computerScore += 1;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'paper'){
                totalRounds -= 1;
                playerScore += 1;
            }
            else{
                totalRounds -= 1;
                computerScore += 1;
            }
        }
        if(player == 'paper'){
            if(computer == 'rock'){
                totalRounds -= 1;
                playerScore += 1;
            }
            else{
                totalRounds -= 1;
                computerScore += 1;
            }
        }
    }
    updateScore()    
}

// Game is over and the winner will be announced based on number of points. Also display replay button for the user. 
const gameOver = (playerScore, computerScore) => {
    const reloadBTN = document.querySelector('.restart');
    buttons.forEach(button => button.style.display = 'none');
    document.getElementById("movetext").style.display = 'none';

    if(playerScore == computerScore){
        statusText.innerHTML = `It ends with a tie`;
    }
    else if(playerScore > computerScore){
        statusText.innerHTML = `You win!`;
    }
    else{
        statusText.innerHTML = 'You lose';
    }

    reloadBTN.innerText = 'Restart';
    reloadBTN.style.display = 'block';
    reloadBTN.addEventListener('click', () => {
        window.location.reload();
    })
}

game();