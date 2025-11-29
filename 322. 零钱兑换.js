/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 我们将数组大小设为 amount + 1，以覆盖从 0 到 amount 的所有金额。
  const f = new Array(amount + 1).fill(amount + 1);
  // 凑成金额 0 需要 0 枚硬币。这是整个动态规划的起点。
  f[0] = 0;
  // 我们从金额 1 开始，一直计算到目标金额 amount。
  for (let i = 1; i <= amount; i++) {
    // 对于当前金额 i，我们尝试使用每一种硬币。
    for (let coin of coins) {
      if (coin <= i) {
        // 核心递推公式：
        // 凑成金额 i 的最小硬币数 = min(当前已知的最小值, 凑成金额 i - coin 的最小硬币数 + 1)
        f[i] = Math.min(f[i], f[i - coin] + 1);
      }
    }
  }
  // 循环结束后，f[amount] 中存储的就是凑成目标金额所需的最小硬币数。
  return f[amount] > amount ? -1 : f[amount];
};


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const f = new Array(amount + 1).fill(amount + 1);
  f[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let minn = Number.MAX_VALUE;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        minn = Math.min(minn, f[i - coins[j]]);
      }
    }
    f[i] = minn + 1;
  }
  return f[amount] > amount ? -1 : f[amount];
};