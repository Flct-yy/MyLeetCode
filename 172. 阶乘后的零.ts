function trailingZeroes_1(n: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let temp = 0;
    let j = i;
    while (j % 5 === 0) {
      temp++;
      j = Math.floor(j / 5);
    }
    ans += temp;
  }
  return ans;
};

/**
 * n/5 = 有多少个数 至少含 1 个 5
 * n/25 = 有多少个数 额外多 1 个 5（25=5×5）
 * n/125 = 有多少个数 再额外多 1 个 5（125=5×5×5）
 * 以此类推……
 * @param n 
 * @returns 
 */
function trailingZeroes_2(n: number): number {
  let ans = 0;
  while (n !== 0) {
    n = Math.floor(n / 5);
    ans += n;
  }
  return ans;
};

