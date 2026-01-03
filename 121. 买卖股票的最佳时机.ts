function maxProfit(prices: number[]): number {
  const pL = prices.length;
  let minP = Infinity;
  let res = 0;
  for (let i = 0; i < pL; i++) {
    if (prices[i] < minP) minP = prices[i];
    else {
      res = Math.max(res, prices[i] - minP);
    }
  }
  return res;
};