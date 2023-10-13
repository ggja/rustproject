import init, { get_tic_tac_toe_board } from '../tto/pkg/tto.js';
  
async function run() {
    await init();
    const boardValues = get_tic_tac_toe_board();
    for (let i = 0; i < boardValues.length; i++) {
        const cell = document.getElementById(`cell-${i}`);
        cell.innerText = boardValues[i] == 0 ? "" : boardValues[i] == 1 ? "X" : "O";;
        cell.className = boardValues[i] == 0 ? "empty" : boardValues[i] == 1 ? "cell_x" : "cell_o";
    }
}

run();