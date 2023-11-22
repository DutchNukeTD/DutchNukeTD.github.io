document.addEventListener('DOMContentLoaded', () => {
    let windowText = document.querySelector('#PlayerChoice');
    let computerChoiceWindow = document.querySelector('#ComputerChoice');
    
    let btnRock = document.querySelector('#Rock');

    // Get the computer choice
    function getComputerChoice() {
        const computerChoices = ['Rock!', 'Paper!', 'Sissers!'];
        const computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        let computerChoiceText = "    Computer choose: " + computerChoice;
        computerChoiceWindow.textContent = computerChoiceText
        return computerChoice;
    };

    
    // 
    let playerPoints = document.querySelector('#PlayerScore');
    let computerPoints = document.querySelector('#ComputerScore');
    let gameResults = document.querySelector('#GameResult');
    
    function gameStartValues() {
        playerPoints.textContent = 0;
        computerPoints.textContent = 0;
        computerChoiceWindow.textContent = 'Computer:';
        gameResults.textContent = 'Let the games begin!';
        windowText.textContent = 'Player:';
    };

    function playRound(playerInput, computerChoice) {
        if (playerInput === 'rock'){
            if (computerChoice === 'Rock!') {
                gameResults.textContent = "It's a draw...";
            } else if (computerChoice === 'Paper!') {
                gameResults.textContent = "You Lose! Paper beats Rock";
                computerPoints.textContent = String(Number(computerPoints.innerHTML)+1);
            } else {
                gameResults.textContent = 'You win! Rock beats Sissers';
                playerPoints.textContent = String(Number(playerPoints.innerHTML)+1);
            }
        } else if (playerInput === 'paper'){
            if (computerChoice === 'Paper!') {
                gameResults.textContent = "It's a draw...";
            } else if (computerChoice === 'Rock!') {
                gameResults.textContent = "You win! Paper beats Rock";
                playerPoints.textContent = String(Number(playerPoints.innerHTML)+1);
            } else {
                gameResults.textContent = 'You lose! Sissers beats paper';
                computerPoints.textContent = String(Number(computerPoints.innerHTML)+1);
            }
         } else if (playerInput === 'sissers'){
            if (computerChoice === 'Sissers!') {
                gameResults.textContent = "It's a draw...";
            } else if (computerChoice === 'Rock!') {
                gameResults.textContent = "You lose! Rock beats sissers";
                computerPoints.textContent = String(Number(computerPoints.innerHTML)+1);
            } else {
                gameResults.textContent = 'You win! Sissers beats paper';
                playerPoints.textContent = String(Number(playerPoints.innerHTML)+1);
            } 

         }
         if (playerPoints.textContent == 5) {
            alert('Player wins! play again.');
            gameStartValues();
         } else if (computerPoints.textContent == 5) {
            alert('You lose! try again.');
            gameStartValues();
         };
    }




    btnRock.addEventListener('click', () => {
        windowText.textContent = 'Player choose: Rock!';
        playRound('rock', getComputerChoice())
    });

    let btnPaper = document.querySelector('#Paper');

    btnPaper.addEventListener('click', () => {
        windowText.textContent = 'Player choose: Paper!';
        playRound('paper', getComputerChoice())
    });

    let btnScissors = document.querySelector('#Scissors');

    btnScissors.addEventListener('click', () => {
        windowText.textContent = 'Player choose: Scissors!';
        playRound('sissers', getComputerChoice())
    });
});