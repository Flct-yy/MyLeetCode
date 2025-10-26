/**
 * 二分查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 先按第一列找到target可能所在的行
  let colLeft = 0;
  let colRight = matrix.length - 1;
  // 左闭右开的二分查找
  while (colLeft <= colRight) {
    const mid = Math.floor((colLeft + colRight) / 2);
    if (matrix[mid][0] === target) {
      return true;
    } else if (matrix[mid][0] < target) {
      colLeft = mid + 1;
    } else {
      colRight = mid - 1;
    }
  }


  // colLeft 是 首行大于target的行
  // colLeft - 1 应该指向target所在的列
  // 再在target所在的行中二分查找
  const row = colLeft - 1;
  if (row < 0 || row >= matrix.length) {
    return false;
  }
  let rowLeft = 0;
  let rowRight = matrix[row].length - 1;
  // 左闭右开的二分查找
  while (rowLeft <= rowRight) {
    const mid = Math.floor((rowLeft + rowRight) / 2);
    if (matrix[row][mid] === target) {
      return true;
    } else if (matrix[row][mid] < target) {
      rowLeft = mid + 1;
    } else {
      rowRight = mid - 1;
    }
  }
  // 未找到target
  return false;
};