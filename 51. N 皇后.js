/**
 * 每个皇后必须位于不同行和不同列，因此将 N 个皇后放置在 N×N 的棋盘上，一定是每一行有且仅有一个皇后，每一列有且仅有一个皇后，且任何两个皇后都不能在同一条斜线上。
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const solutions = []; // 存储所有合法的棋盘布局（最终结果）
  const queens = new Array(n).fill(-1); // 记录每行皇后的位置：queens[row] = col（第row行的皇后在第col列）
  const columns = new Set(); // 记录已被皇后占用的列（避免同列冲突）
  const diagonal1 = new Set(); // 记录已被皇后占用的对角线（左上→右下，用 row - col 标识）
  const diagonal2 = new Set(); // 记录已被皇后占用的对角线（右上→左下，用 row + col 标识）
  const row = new Array(n).fill("."); // 临时生成单行棋盘的辅助数组（如 [".", "Q", ".", "."]）

  // 将 queens 数组（记录每行皇后位置）转换为符合要求的棋盘字符串格式
  function generateBoard() {
    const board = [];
    for (let i = 0; i < n; i++) {
      // queens[i]表示第i行的皇后所在列数
      row[queens[i]] = "Q";
      // 拼接成字符串（如 ".Q.."）并加入结果
      board.push(row.join(""));
      // 变回默认的单行棋盘
      row[queens[i]] = ".";
    }
    return board;
  }

  function backtrack(row) {
    // 所有行都填完了，将结果加入 solutions
    if (row === n) {
      const board = generateBoard();
      solutions.push(board);
      return;
    }

    // 尝试在当前行放置皇后
    for (let i = 0; i < n; i++) {
      // 跳过已被占用的列和对角线 剪枝
      if (columns.has(i) || diagonal1.has(row - i) || diagonal2.has(row + i)) {
        continue;
      }
      // 保存当前皇后位置(当回溯时 不需要恢复queens[row] 因为当下次找到合适的皇后位置时会重新赋值) 
      queens[row] = i;
      // 标记当前列和对角线已被占用
      columns.add(i)
      diagonal1.add(row - i);
      diagonal2.add(row + i);
      // 递归尝试下一行
      backtrack(row + 1);
      // 恢复当前占用
      queens[row] = -1;
      columns.delete(i)
      diagonal1.delete(row - i);
      diagonal2.delete(row + i);
    }
  }

  // 开始搜索
  backtrack(0);
  // 返回所有合法的棋盘布局
  return solutions;
}


