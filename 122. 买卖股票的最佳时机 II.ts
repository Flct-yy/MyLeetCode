function maxProfit(prices: number[]): number {
  const pL = prices.length;
  let minP = Infinity;
  let res = 0;
  for (let i = 0; i < pL; i++) {
    if (prices[i] > minP) res += prices[i] - minP;
    minP = prices[i]
  }
  return res;
};