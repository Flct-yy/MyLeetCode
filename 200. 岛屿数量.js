/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 结果计数
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // 深度优先搜索
  const DFS = (r,j) => {
    if(r < 0 || r >= rows || j < 0 || j >= cols || grid[r][j] === '0') return;

    // 将查看过的节点置为0 表示已经访问过
    grid[r][j] = '0';
    // 四周递归
    DFS(r-1,j);
    DFS(r+1,j);
    DFS(r,j-1);
    DFS(r,j+1);
  }

  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if(grid[i][j] === '1'){
        // 找到一个岛屿
        count++;
        DFS(i,j);
      }
    }
  }
  
  return count;
};