/**
 * 记录 0 的位置，然后遍历矩阵，将其上下左右的元素置为 0
 * 将 是否有 0 的位置记录在第一行和第一列中，然后遍历矩阵，将其上下左右的元素置为 0
 * 时间复杂度O(Nm) 空间复杂度O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if(!matrix) return;
  // n 是行数 m 是列数
  const n  = matrix.length, m =matrix[0].length;
  // 记录 第一行y 第一列x 是否有 0
  let x_has_zero = false , y_has_zero = false;
  // 遍历第一行和第一列，记录是否有 0
  for(let i = 0;i < n;i++) {
    if(matrix[i][0] === 0){
      x_has_zero = true
    }
  }
  for(let i = 0;i < m;i++) {
    if(matrix[0][i] === 0){
      y_has_zero = true;
    }
  }

  // 遍历矩阵，记录 0 的位置保存到第一行和第一列中
  for(let i = 1;i < n;i++){
    for(let j = 1;j < m;j++){
      if(matrix[i][j] === 0){
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // 遍历矩阵，将其上下左右的元素置为 0
  for(let i = 1;i < n;i++){
    for(let j = 1;j < m;j++){
      if(matrix[i][0] === 0 || matrix[0][j] === 0){
        matrix[i][j] = 0;
      }
    }
  }

  // 如果第一行有 0，将第一列全部置为 0
  if(x_has_zero){
    for(let i = 0;i < n;i++) {
      matrix[i][0] = 0;
    }
  }
  // 如果第一列有 0，将第一行全部置为 0
  if(y_has_zero){
    for(let i = 0;i < m;i++) {
      matrix[0][i] = 0;
    }
  }
};