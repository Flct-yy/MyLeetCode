/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length, n = grid[0].length;
  // 存储腐烂橘子的坐标
  let queue = [];
  // 记录有多少个新鲜橘子
  let fresh = 0;

  // 初始化：收集所有腐烂橘子的位置，统计新鲜橘子数量
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  let minutes = 0;
  while (fresh > 0 && queue.length > 0) {
    minutes++;
    const tmp = queue;
    queue = [];
    // 遍历腐烂橘子周围的位置
    for (const [x, y] of tmp) {
      // 腐烂橘子周围的新鲜橘子
      for (const [dx, dy] of [[x, y + 1], [x, y - 1], [x + 1, y], [x - 1, y]])
        // 如果相邻位置是新鲜橘子 则修改其状态为腐烂橘子 并将其加入队列 减少新鲜橘子数量
        if (dx >= 0 && dx < m && dy >= 0 && dy < n && grid[dx][dy] === 1) {
          grid[dx][dy] = 2;
          queue.push([dx, dy]);
          fresh--;
        }
    }
  }

  // 最终判断：如果还有新鲜橘子，返回-1；否则返回耗时
  return fresh === 0 ? minutes : -1;
};