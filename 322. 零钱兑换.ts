function coinChange(coins: number[], amount: number): number {
  const Len = amount + 1;
  const dp = new Array(Len).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};