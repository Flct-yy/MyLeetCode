/**
 * 按顺时针螺旋顺序返回矩阵中的所有元素
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 处理空矩阵的情况
  if(!matrix) return;
  // m 是行数 n是列数
  const m = matrix.length, n = matrix[0].length;
  // 没有遍历的边界
  let top = 0, bottom = m - 1, left = 0, right = n - 1;
  // 存储结果的数组
  const res = [];
  
  while (res.length < m * n){
    // 1. 从左到右遍历上边界
    for(let i = left;i <= right;i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // 2. 从上到下遍历右边界
    for(let i = top;i <= bottom;i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 3. 从右到左遍历下边界（确保还有行需要遍历）
    if(top<=bottom){
      for(let i = right;i >= left;i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // 4. 从下到上遍历左边界（确保还有列需要遍历）
    if(right>=left){
      for(let i = bottom;i >= top;i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
  return res;
};