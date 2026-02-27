function numIslands_1(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set<string>();

  const helper = (grid: string[][], i: number, j: number) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0' || visited.has(`${i}-${j}`)) {
      return;
    }
    visited.add(`${i}-${j}`);
    helper(grid, i + 1, j);
    helper(grid, i - 1, j);
    helper(grid, i, j + 1);
    helper(grid, i, j - 1);
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1' && !visited.has(`${i}-${j}`)) {
        helper(grid, i, j);
        count++;
      }
    }
  }

  return count;
};

function numIslands_2(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set<string>();

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1' && !visited.has(`${i}-${j}`)) {
        count++;

        const queue = [[i, j]];
        visited.add(`${i}-${j}`);
        while (queue.length) {
          const [x, y] = queue.shift()!;
          if (x > 0 && grid[x - 1][y] === '1' && !visited.has(`${x - 1}-${y}`)) {
            visited.add(`${x - 1}-${y}`);
            queue.push([x - 1, y]);
          }
          if (x < rows - 1 && grid[x + 1][y] === '1' && !visited.has(`${x + 1}-${y}`)) {
            visited.add(`${x + 1}-${y}`);
            queue.push([x + 1, y]);
          }
          if (y > 0 && grid[x][y - 1] === '1' && !visited.has(`${x}-${y - 1}`)) {
            visited.add(`${x}-${y - 1}`);
            queue.push([x, y - 1]);
          }
          if (y < cols - 1 && grid[x][y + 1] === '1' && !visited.has(`${x}-${y + 1}`)) {
            visited.add(`${x}-${y + 1}`);
            queue.push([x, y + 1]);
          }
        }
      }
    }
  }

  return count;
};