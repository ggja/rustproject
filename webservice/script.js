// Example Tic-Tac-Toe board values as a single array.
const boardValues = [
    "X", "O", "X",
    "O", "X", "O",
    "X", "O", "o"
];

// Bind the array values to the Tic-Tac-Toe board.
for (let i = 0; i < boardValues.length; i++) {
    document.getElementById(`cell-${i}`).innerText = boardValues[i];
}
