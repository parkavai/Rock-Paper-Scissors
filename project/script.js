let playerScore = 0;
let computerScore = 0;
let totalRounds = 5;

const scoreText = document.getElementById("scoreText");
const roundsText = document.getElementById("roundText");
const winnerText = document.getElementById("winnerText");
const buttons = document.querySelectorAll('.click');

const game = () =>{
    winnerText.innerHTML = "First round to 5";
    buttons.forEach(button => button.addEventListener('click', playGame));
}

const playGame = (e) => {
    winnerText.style.display = 'None';
    roundsText.innerHTML = `Rounds left: ${totalRounds}`;
    scoreText.innerHTML = `${playerScore} : ${computerScore}`;
    buttonClick = e.target.id;
    player = playerChoice(buttonClick);
    computer = computerChoice();
    winner(player,computer);
    if(totalRounds == 0){
        gameOver(playerScore, computerScore)
    }
}

const updateScore = () =>{
    scoreText.innerHTML = `${playerScore} : ${computerScore}`;
    roundsText.innerHTML = `Rounds left: ${totalRounds}`;
}

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

const gameOver = (playerScore, computerScore) => {
    const reloadBTN = document.querySelector('.restart');
    buttons.forEach(button => button.style.display = 'none');
    roundsText.style.display = 'none';
    scoreText.style.display = 'none';
    winnerText.style.display = 'block';
    document.getElementById("movetext").style.display = 'none';
    if(playerScore == computerScore){
        winnerText.innerHTML = `It ends with a tie`;
    }
    else if(playerScore > computerScore){
        winnerText.style.color = 'black';
        winnerText.innerHTML = `You win!`;
    }
    else{
        winnerText.style.color = 'black';
        winnerText.innerHTML = 'You lose'
    }
    reloadBTN.innerText = 'Restart';
    reloadBTN.style.display = 'block';
    reloadBTN.addEventListener('click', () => {
        window.location.reload();
    })
}

game();