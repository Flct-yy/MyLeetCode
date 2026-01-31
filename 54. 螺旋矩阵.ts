function spiralOrder_1(matrix: number[][]): number[] {

  if (matrix.length === 0 || (matrix[0] && matrix[0].length === 0)) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  if (m === 1) {
    return matrix[0];
  }
  if (n === 1) {
    const res = [];
    for (let row = 0; row < m; row++) {
      res.push(matrix[row][0]);
    }
    return res;
  }

  let row = 0;
  let col = 0;
  let dir = 1;
  let laps = 0;
  const res = [];

  while (res.length < m * n) {
    res.push(matrix[row][col]);

    switch (dir) {
      case 1:
        col++;
        if (col === n - 1 - laps) {
          dir = 2;
        }
        break;
      case 2:
        row++;
        if (row === m - 1 - laps) {
          dir = 3;
        }
        break;
      case 3:
        col--;
        if (col === laps) {
          dir = 4;
        }
        break;
      case 4:
        row--;
        if (row === laps + 1) {
          laps++;
          dir = 1;
        }
        break;
    }
  }
  return res;
};

function spiralOrder_2(matrix: number[][]): number[] {
  // 第一步：处理空矩阵/无效矩阵（彻底避免访问 matrix[0].length 报错）
  if (!matrix || matrix.length === 0 || !matrix[0] || matrix[0].length === 0) {
    return [];
  }

  const m = matrix.length;    // 矩阵的行数（绝对行边界：0 ~ m-1）
  const n = matrix[0].length; // 矩阵的列数（绝对列边界：0 ~ n-1）
  let top = 0;                // 上边界（当前未遍历的最上行）
  let bottom = m - 1;         // 下边界（当前未遍历的最下行）
  let left = 0;               // 左边界（当前未遍历的最左列）
  let right = n - 1;          // 右边界（当前未遍历的最右列）
  const res: number[] = [];   // 存储结果的数组

  // 循环条件：结果数组的长度小于矩阵元素总数
  while (res.length < m * n) {
    // 1. 从左到右遍历上边界行（top 行）
    if (top <= bottom && left <= right) { // 先判断边界相对合法
      for (let col = left; col <= right && res.length < m * n; col++) {
        // 索引绝对合法校验（兜底，避免越界）
        if (top >= 0 && top < m && col >= 0 && col < n) {
          res.push(matrix[top][col]);
        }
      }
      top++; // 上边界向下收缩一行
    }

    // 2. 从上到下遍历右边界列（right 列）
    if (left <= right && top <= bottom) { // 先判断边界相对合法
      for (let row = top; row <= bottom && res.length < m * n; row++) {
        // 索引绝对合法校验（兜底，避免越界）
        if (row >= 0 && row < m && right >= 0 && right < n) {
          res.push(matrix[row][right]);
        }
      }
      right--; // 右边界向左收缩一列
    }

    // 3. 从右到左遍历下边界行（bottom 行）
    if (bottom >= top && right >= left) { // 先判断边界相对合法
      for (let col = right; col >= left && res.length < m * n; col--) {
        // 索引绝对合法校验（兜底，避免越界）
        if (bottom >= 0 && bottom < m && col >= 0 && col < n) {
          res.push(matrix[bottom][col]);
        }
      }
      bottom--; // 下边界向上收缩一行
    }

    // 4. 从下到上遍历左边界列（left 列）
    if (right >= left && bottom >= top) { // 先判断边界相对合法
      for (let row = bottom; row >= top && res.length < m * n; row--) {
        // 索引绝对合法校验（兜底，彻底避免 row 越界导致 matrix[row] 为 undefined）
        if (row >= 0 && row < m && left >= 0 && left < n) {
          res.push(matrix[row][left]);
        }
      }
      left++; // 左边界向右收缩一列
    }
  }

  return res;
};