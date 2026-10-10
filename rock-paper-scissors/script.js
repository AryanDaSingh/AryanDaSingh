function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
    let choice = getRndInteger(0,3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = null;
    while (true) {
        choice = prompt("Round " + round + ": Rock, paper, or scissors: ").toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            break;
        } else {
            alert("Please try again");
        }
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            alert("It's a draw!");
        } else if (computerChoice === "paper") {
            alert("Computer wins!");
            computerScore++;
        } else if(computerChoice === "scissors") {
            alert("Human wins!");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            alert("Human wins!");
            humanScore++;
        } else if (computerChoice === "paper") {
            alert("It's a draw!");
        } else if (computerChoice === "scissors") {
            alert("Computer wins!");
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            alert("Human wins!");
            humanScore++;
        } else if (computerChoice === "paper") {
            alert("Computer wins!");
            computerScore++;
        } else if (computerChoice === "scissors") {
            alert("It's a draw!");
        }
    }
    alert("Human Score: " + humanScore + "\nComputer Score: " + computerScore);
}

let round = null;

function playGame() {
    for (let i = 0; i < 5; i++) {
        round = i + 1;
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        alert("Human wins the game!");
    } else if (humanScore < computerScore) {
        alert("Computer wins the game!");
    } else {
        console.log("It's a draw!");
    }
}