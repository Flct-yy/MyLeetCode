/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const rows = board.length;
  const cols = board[0].length;
  const newBoard = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

  const countNeighbors = (board: number[][], row: number, col: number): number => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        const newRow = row + i;
        const newCol = col + j;
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          count += board[newRow][newCol];
        }
      }
    }
    return count;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const count = countNeighbors(board, i, j);
      if (board[i][j]) {
        if (count >= 2 && count <= 3) {
          newBoard[i][j] = 1;
        }
      } else {
        if (count === 3) {
          newBoard[i][j] = 1;
        }
      }
    }
  }

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      board[i][j] = newBoard[i][j];
    });
  });
};