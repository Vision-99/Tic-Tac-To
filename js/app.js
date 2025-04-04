// This file contains the JavaScript code that implements the Tic Tac Toe game logic.

let board = Array(9).fill(null);
let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("reset-button");

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes(null) ? null : "Tie";
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");
        if (!board[index] && !resultDiv.textContent) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            const winner = checkWinner();
            if (winner) {
                if (winner === "Tie") {
                    resultDiv.textContent = "It's a Tie!";
                } else {
                    resultDiv.textContent = currentPlayer + " wins";
                }
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});

resetButton.addEventListener("click", () => {
    board = Array(9).fill(null);
    cells.forEach(cell => cell.textContent = "");
    resultDiv.textContent = "";
    currentPlayer = "X";
});