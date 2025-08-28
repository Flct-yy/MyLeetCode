/**
 * 先转置矩阵，然后翻转每一行
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  
  // 转置矩阵（行列互换）
  // 将矩阵沿主对角线翻转，即matrix[i][j]与matrix[j][i]交换
  for(let i = 0; i < n; i++) {
    // 注意：j从i开始，避免重复交换已经交换过的元素
    for(let j = i; j < n; j++) {
      // 交换matrix[i][j]和matrix[j][i]
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  
  // 翻转每一行
  for(let i = 0;i < n;i++){
    // 只需要遍历前半列，j < n/2 避免重复交换
    for(let j = 0;j < n/2;j++){
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp
    }
  }
};