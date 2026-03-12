function totalNQueens(n: number): number {
  const columns = new Set();
  const diagonals1 = new Set();
  const diagonals2 = new Set();
  function backtrack(row: number): number {
    if (row === n) {
      return 1;
    } else {
      let count = 0;
      for (let i = 0; i < n; i++) {
        if (columns.has(i) || diagonals1.has(row - i) || diagonals2.has(row + i)) {
          continue;
        }
        columns.add(i);
        diagonals1.add(row - i);
        diagonals2.add(row + i);
        count += backtrack(row + 1);
        columns.delete(i);
        diagonals1.delete(row - i);
        diagonals2.delete(row + i);
      }
      return count;
    }
  }

  return backtrack(0);
};