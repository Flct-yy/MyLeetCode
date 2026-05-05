function maximalSquare_1(matrix: string[][]): number {
  let maxSide = 0;
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return maxSide;
  }
  let rows = matrix.length, columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === '1') {
        // 遇到一个 1 作为正方形的左上角
        maxSide = Math.max(maxSide, 1);
        // 计算可能的最大正方形边长
        let currentMaxSide = Math.min(rows - i, columns - j);
        for (let k = 1; k < currentMaxSide; k++) {
          // 判断新增的一行一列是否均为 1
          let flag = true;
          if (matrix[i + k][j + k] === '0') {
            break;
          }
          for (let m = 0; m < k; m++) {
            if (matrix[i + k][j + m] === '0' || matrix[i + m][j + k] === '0') {
              flag = false;
              break;
            }
          }
          if (flag) {
            maxSide = Math.max(maxSide, k + 1);
          } else {
            break;
          }
        }
      }
    }
  }
  let maxSquare = maxSide * maxSide;
  return maxSquare;
};


function maximalSquare_2(matrix: string[][]): number {
  let maxSide = 0;
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return maxSide;
  }
  let rows = matrix.length, columns = matrix[0].length;
  let dp: number[][] = Array.from({ length: rows }, () => new Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] == '1') {
        if (i == 0 || j == 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }
  let maxSquare = maxSide * maxSide;
  return maxSquare;
};