/**
 * 每个数是它左上方和右上方的数的和
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // res 用来存储结果
  let res = [];

  // 外层循环：遍历每一行，从第 0 行开始，直到第 numRows - 1 行
  for (let i = 0; i < numRows; i++) {
    res[i] = [];

    // 第 i 行有 i + 1 个元素，所以 j 的范围是 0 到 i
    for (let j = 0; j < i + 1; j++) {
      // 每行的第一个元素 (j === 0) 和最后一个元素 (j === i) 都为 1
      if (j === 0 || j === i) {
        res[i].push(1);
      } else {
        // 对于中间的元素，它的值等于上一行 (i-1) 中
        // 它左上方元素 (j-1) 和右上方元素 (j) 的值之和
        res[i].push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
  }
  // 循环结束后，res 中已包含了杨辉三角的前 numRows 行，将其返回
  return res;
};


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    
    // 初始化结果数组，并放入第一行
    const result = [[1]];
    
    // 从第二行开始生成 (i 从 1 开始)
    for (let i = 1; i < numRows; i++) {
        // 获取上一行
        const prevRow = result[i - 1];
        
        // 关键技巧：通过在上一行前后补0，然后对应相加得到新行
        const currRow = prevRow.map((val, j) => (prevRow[j - 1] || 0) + val);
        // 因为 prevRow 返回的是 和 prevRow 长度一样的数组 少一个末尾1
        currRow.push(1);
        
        // 将新行推入结果数组
        result.push(currRow);
    }
    
    return result;
};