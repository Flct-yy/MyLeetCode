function isValidSudoku(board: string[][]): boolean {
  const rowSets = new Array(9).fill(0).map(() => new Set<string>());
  const colSets = new Array(9).fill(0).map(() => new Set<string>());
  const subboxSets = new Array(9).fill(0).map(() => new Set<string>());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c === '.') continue;

      // 计算子数独的索引（0-8，比三维数组更简洁）
      const subboxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // 3. 核心判断：只要有一个 Set 中已存在该值，直接返回 false
      if (rowSets[i].has(c) || colSets[j].has(c) || subboxSets[subboxIndex].has(c)) {
        return false;
      }

      // 4. 存入对应 Set
      rowSets[i].add(c);
      colSets[j].add(c);
      subboxSets[subboxIndex].add(c);
    }
  }

  return true;
}
