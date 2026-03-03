function snakesAndLadders(board: number[][]): number {
  const steps = 6;
  const n = board.length;
  const target = n * n;
  const vis = new Array(target + 1).fill(0);
  vis[1] = true;
  const queue: number[][] = [[1, 0]];
  while (queue.length) {
    const curr = queue.shift();
    if (!curr) continue;
    for (let i = 1; i <= steps; i++) {
      let next = curr[0] + i;
      if (next > target) {
        break;
      }
      const [row, col] = getRC(next, n);

      const num = board[row][col];

      if (num > 0) {
        next = num;
      }

      if (next === target) {
        return curr[1] + 1;
      }
      if (!vis[next]) {
        vis[next] = true;
        queue.push([next, curr[1] + 1]);
      }
    }
  }
  return -1;
};

const getRC = (id: number, n: number): number[] => {
  let r = Math.floor((id - 1) / n);
  let c = (id - 1) % n;

  if (r % 2 === 1) {
    c = n - 1 - c;
  }
  r = n - 1 - r;
  return [r, c];
};