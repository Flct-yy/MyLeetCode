function climbStairs(n: number): number {
  let cur = 0;
  let bef = -1;
  for (let i = 0; i < n; i++) {
    const next = (cur < 0 ? 0 : (cur === 0 ? 1 : cur)) + (bef < 0 ? 0 : (bef === 0 ? 1 : bef));
    bef = cur;
    cur = next;
  }
  return cur;
};