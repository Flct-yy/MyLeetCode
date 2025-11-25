/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 状态数组
  // f[i] 表示组成数字 i 所需的最少完全平方数的个数
  const f = new Array(n + 1).fill(0);
  
  // 用来依次计算出 f[1], f[2], f[3], ..., 直到 f[n] 的值。
  for (let i = 1; i <= n; i++) {
    // 初始化最小值
    let minn = Number.MAX_VALUE;
    // 遍历所有可能的完全平方数 尝试寻找最小值
    for (let j = 1; j * j <= i; j++) {
      minn = Math.min(minn, f[i - j * j]);
    }
    // f[i - j*j] 的最小值 再加 上一个完全平方数 j*j 就等于 当前数
    f[i] = minn + 1;
  }
  // 返回组成数字 n 所需的最少完全平方数的个数
  return f[n];
};
