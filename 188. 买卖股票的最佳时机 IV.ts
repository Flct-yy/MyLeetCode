function maxProfit(k: number, prices: number[]): number {
  const len: number = prices.length;
  const buy: number[] = new Array(k + 1).fill(-Infinity), sell: number[] = new Array(k + 1).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= k; j++) {
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
      sell[j] = Math.max(sell[j], buy[j] + prices[i]);
    }
  }

  return sell[k];
};