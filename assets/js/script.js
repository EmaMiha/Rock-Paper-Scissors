// DOM variables
const choices = ["rock", "paper", "scissors"];
const messages = document.getElementById("messages");
const buttons = document.getElementsByName("check");
const playerScore = document.getElementById("player-score");
const computerScore = document.document.getElementById("computer-score");
const playerImage = document.document.getElementById("player-image");
const computerImage = document.document.getElementById("computer-image");

// Get the button elements and add event listeners 

for (let button of buttons ) {
    button.addEventListener("click", function() {
        letPlayerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    } );
}

// The main game function

function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let result = checkWinner(choices [computerchoice], choices[playerChoice]);
    updateScores(result);
}