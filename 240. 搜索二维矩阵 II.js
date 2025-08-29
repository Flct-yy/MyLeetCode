/**
 * 从矩阵的右上角（即第一行最后一列）开始搜索。
 * 如果当前元素等于目标值，返回 true。
 * 如果当前元素大于目标值，由于列是升序排列，当前列的所有元素都大于目标值，因此向左移动一列。
 * 如果当前元素小于目标值，由于行是升序排列，当前行的所有元素都小于目标值，因此向下移动一行。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix === null||matrix.length === 0||matrix[0].length === 0) return false;
  // m是行数，n是列数
  const m = matrix.length, n = matrix[0].length;

  // 初始化搜索位置：从矩阵的右上角开始
  // 这个位置具有特殊性质：它是当前行的最大值和当前列的最小值
  // 因此，如果当前元素大于目标值，向左移动一列；如果当前元素小于目标值，向下移动一行
  let row = 0, col = n - 1;

  
  while(row < m && col >= 0) {
    if(matrix[row][col] === target)
      return true;
    else if(matrix[row][col] > target)
      col--;
    else
      row++;
  }
  return false;
};