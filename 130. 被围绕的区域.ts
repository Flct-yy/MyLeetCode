/**
 Do not return anything, modify board in-place instead.
 */
function solve_1(board: string[][]): void {
  if (board.length === 0 || board[0].length === 0) {
    return;
  }
  const rows = board.length;
  const cols = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        const queue: [number, number][] = []; // 存储当前连通区域的所有坐标
        const tempQueue: [number, number][] = []; // BFS遍历队列
        let isSurround = true;

        tempQueue.push([i, j]);
        board[i][j] = 'A';
        queue.push([i, j]);

        // BFS遍历连通区域
        while (tempQueue.length > 0) {
          const [x, y] = tempQueue.shift()!; // 注意：BFS用shift()，DFS用pop()

          // 检查是否是边缘位置，只要有一个边缘位置，就说明不是被包围的
          if (x === 0 || x === rows - 1 || y === 0 || y === cols - 1) {
            isSurround = false;
          }

          // 上
          if (x > 0 && board[x - 1][y] === 'O') {
            board[x - 1][y] = 'A';
            tempQueue.push([x - 1, y]);
            queue.push([x - 1, y]);
          }
          // 下
          if (x < rows - 1 && board[x + 1][y] === 'O') {
            board[x + 1][y] = 'A';
            tempQueue.push([x + 1, y]);
            queue.push([x + 1, y]);
          }
          // 左
          if (y > 0 && board[x][y - 1] === 'O') {
            board[x][y - 1] = 'A';
            tempQueue.push([x, y - 1]);
            queue.push([x, y - 1]);
          }
          // 右
          if (y < cols - 1 && board[x][y + 1] === 'O') {
            board[x][y + 1] = 'A';
            tempQueue.push([x, y + 1]);
            queue.push([x, y + 1]);
          }
        }

        if (isSurround) {
          // 被包围：替换为X
          for (const [x, y] of queue) {
            board[x][y] = 'X';
          }
        } else {
          for (const [x, y] of queue) {
            board[x][y] = 'O';
          }
        }
      }
    }
  }
};

function solve_2(board: string[][]): void {

  const rows = board.length;
  const cols = board[0].length;
  const visited = new Set<string>();

  const helper = (board: string[][], x: number, y: number, rows: number, cols: number): void => {
    // 边界判断 + 当前位置不是O（无需标记）
    if (
      x < 0 || x >= rows ||
      y < 0 || y >= cols ||
      board[x][y] !== 'O'
    ) {
      return;
    }

    // 标记为A（表示是边缘连通的O，不替换）
    board[x][y] = 'A';

    // 递归遍历上下左右四个方向
    helper(board, x - 1, y, rows, cols); // 上
    helper(board, x + 1, y, rows, cols); // 下
    helper(board, x, y - 1, rows, cols); // 左
    helper(board, x, y + 1, rows, cols); // 右
  }

  for (let j = 0; j < cols; j++) {
    helper(board, 0, j, rows, cols);          // 第一行
    helper(board, rows - 1, j, rows, cols);   // 最后一行
  }
  // 遍历第一列和最后一列（排除已遍历的行边缘）
  for (let i = 1; i < rows - 1; i++) {
    helper(board, i, 0, rows, cols);          // 第一列
    helper(board, i, cols - 1, rows, cols);   // 最后一列
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        // 未被标记的O（被包围的）替换为X
        board[i][j] = 'X';
      } else if (board[i][j] === 'A') {
        // 标记过的O（边缘连通的）恢复为O
        board[i][j] = 'O';
      }
      // X保持不变，无需处理
    }
  }

};