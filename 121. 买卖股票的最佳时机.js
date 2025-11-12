/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 记录当前日期之前的最低股票价格
  let beforeMin = Infinity;
  // 记录截至当前能获得的最大利润
  let maxProfit = 0
  // 遍历每日价格，逐个计算“当日卖出能获得的最大利润”
  for (const price of prices) {
    // 更新历史最低价格：对比当前价格和之前的最低价格，取更小值 
    beforeMin = Math.min(beforeMin, price);
    // 计算当日利润：当日价格 - 历史最低价格（即“以历史最低价买入，当日卖出”的利润） 并更改当前最大利润
    maxProfit = Math.max(maxProfit, price - beforeMin);
  }
  // 最终返回最大利润 (如果没有则返回0)
  return maxProfit;
};