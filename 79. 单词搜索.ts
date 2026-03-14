function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  // 表示要移动的方向
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const wordLen = word.length;

  const dfs = (row: number, col: number, index: number): boolean => {
    if (board[row][col] !== word.charAt(index)) {
      return false;
    } else if (index === wordLen - 1) {
      return true;
    }
    const temp = board[row][col];
    board[row][col] = '#';
    for (const [dx, dy] of directions) {
      const newR = row + dx, newC = col + dy;
      if (newR < 0 || newR >= rows || newC < 0 || newC >= cols || board[newR][newC] === '#') {
        continue;
      }
      if (dfs(newR, newC, index + 1)) return true;
    }
    board[row][col] = temp;
    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};