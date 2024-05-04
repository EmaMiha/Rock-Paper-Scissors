// DOM variables
const choices = ["rock", "paper", "scissors"];
const messages = document.getElementById("messages");
const buttons = document.getElementsByName("check");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

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

    let computerChoice = Math.floor(math.random()*3);

    computerImage.src = `assets/images/${choices [computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices [computerChoice], choices[playerChoice]);
    updateScores(result);
}

