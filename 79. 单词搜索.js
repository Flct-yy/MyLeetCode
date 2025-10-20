/**
 * 检查二维网格中是否存在指定单词（单词由相邻单元格的字母组成，相邻指水平或垂直方向，每个单元格仅能使用一次）
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const h = board.length;
  const w = board[0].length;
  // 创建一个与board大小相同的二维数组，用于记录访问过的位置
  const visited = new Array(h).fill(null).map(() => new Array(w).fill(false));
  // 表示要移动的方向
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  /**
   * 递归检查函数：从网格(i,j)位置开始，判断是否能匹配单词的第k个字符及后续字符
   * @param {number} i 
   * @param {number} j 
   * @param {string} s 
   * @param {number} k 
   */
  const check = (i, j, s, k) => {
    // 检查当前位置是否与单词的第k个字符匹配
    if (board[i][j] !== s.charAt(k)) {
      // 不匹配，返回 false
      return false;
    } else if (k === s.length - 1) {
      // 当 board[i][j] === s.charAt(k) && k === s.length - 1 时，说明找到了完整单词
      return true;
    }

    // 标记当前位置已访问过
    visited[i][j] = true;
    // 用于记录是否找到完整单词
    let res = false;

    // k < s.length - 1 时，说明还没找到完整单词，继续搜索 相邻的四个方向移动
    for (const [dx, dy] of directions) {
      const ni = i + dx;
      const nj = j + dy;
      // 边界处理 超出 board 范围 或 已经访问过 就跳过处理
      if (ni >= 0 && ni < h && nj >= 0 && nj < w && !visited[ni][nj]) {
        // 递归搜索下一个字符
        const flag = check(ni, nj, s, k + 1);
        if (flag) {
          res = true;// 找到匹配路径，标记结果为true
          break;// 无需继续检查其他方向，跳出循环
        }
      }
    }
    // 回溯 恢复当前单元格为未访问状态
    // 以便在其他路径的搜索中可以重新使用该单元格
    visited[i][j] = false;
    // 返回当前路径的检查结果
    return res;
  }


  // 遍历 board 数组，检查每个位置是否可以作为起点
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const flag = check(i, j, word, 0);
      if (flag) {
        return true;// 找到匹配的单词，直接返回true
      }
    }
  }
  return false;
};