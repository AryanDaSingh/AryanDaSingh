let matrix = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

const flatCells = Array.from(document.querySelectorAll('#grid .grid-item'));
const domMatrix = [
    flatCells.slice(0, 3),
    flatCells.slice(3, 6),
    flatCells.slice(6, 9)
];

function renderGrid() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            domMatrix[i][j].textContent = matrix[i][j];
        }
    }
}

function updateItem(row, col, value) {
    matrix[row][col] = value;
    domMatrix[row][col].textContent = value;
}

let isPaused = false;
function itemClicks(domMatrix, onItemClick) {
    domMatrix.forEach((rowElements, r) => {
    rowElements.forEach((item, c) => {
        item.dataset.row = r;
        item.dataset.col = c;

        item.addEventListener('click', () => {
            if (isPaused) return;

            onItemClick(r, c, item);
        });
    })
});
}

renderGrid();

const playerText = document.getElementById('playerText');

function updateText(text) {
    playerText.textContent = text;
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        // Straights
        if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
            if (matrix[0][i] === "X") {
                return "Player 1 wins!";
            } else if (matrix[0][i] === "O") {
                return "Player 2 wins!";
            }
        } else if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
            if (matrix[i][0] === "X") {
                return "Player 1 wins!";
            } else if (matrix[i][0] === "O") {
                return "Player 2 wins!";
            }
        }

        // Diagonals
        if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
            if (matrix[0][0] === "X") {
                return "Player 1 wins!";
            } else if (matrix[0][0] === "O") {
                return "Player 2 wins!";
            }
        } else if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
            if (matrix[0][2] === "X") {
                return "Player 1 wins!";
            } else if (matrix[0][2] === "O") {
                return "Player 2 wins!";
            }
        }
    }
    // Failure
        return -1;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function resetMatrix() {
    isPaused = true;
    await sleep(1000);
    updateText("Resetting...");
    await sleep(1000);
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            updateItem(r, c, "-");
        }
    }
    playerNumber = 1;
    turnCount = 0;
    updateText(`Player ${playerNumber}'s turn`);
    isPaused = false;
}

// function resetMatrix(playerNumber, turnCount) {
//     setTimeout(() => {
//         updateText("Resetting...");
//     }, 1000);
//     for (let r = 0; r < 3; r++) {
//         for (let c = 0; c < 3; c++) {
//             updateItem(r, c, "-");
//         }
//     }
//     setTimeout(() => {
//         playerNumber = 1;
//         turnCount = 0;
//         updateText(`Player ${playerNumber}'s turn`);
//     }, 750);
// }

// Game
let turnCount = 0;
let playerNumber = 1;
updateText(`Player ${playerNumber}'s turn`);
itemClicks(domMatrix, (r, c, itemElement) => {
    if (itemElement.textContent !== "-") {
        updateText("Error: Invalid move");
        setTimeout(() => {
            updateText(`Player ${playerNumber}'s turn`);
        }, 1000);
        return;
    }
    if (playerNumber === 1) {
        updateItem(r, c, "X")
    } else {
        updateItem(r, c, "O")
    }

    turnCount++;

    if (turnCount < 9) {
        if (checkWin() !== -1) {
            updateText(checkWin());
            resetMatrix();
        } else {
            playerNumber = (turnCount % 2) + 1;
            updateText(`Player ${playerNumber}'s turn`);
        }
    } else {
        updateText("Game over");
        resetMatrix();
    }
})