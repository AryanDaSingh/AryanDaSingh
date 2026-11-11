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

function itemClicks(domMatrix, onItemClick) {
    domMatrix.forEach((rowElements, r) => {
    rowElements.forEach((item, c) => {
        item.dataset.row = r;
        item.dataset.col = c;

        item.addEventListener('click', () => {
            onItemClick(r, c, item);
        });
    })
});
}

renderGrid();

itemClicks(domMatrix, (i, j, itemElement) => {
    updateItem(i, j, "X");
});