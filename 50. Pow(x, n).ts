function myPow_1(x: number, n: number): number {
  if (x === 0) return 0;
  if (n === 0) return 1;
  const X = n >= 0 ? x : 1 / x;
  const N = n >= 0 ? n : -n;
  let ans = X;
  for (let i = 1; i < N; i++) {
    ans *= X;
  }
  return ans;
};

function myPow_2(x: number, n: number): number {
  if (n === 0) return 1;
  let res = 1;
  let absN = Math.abs(n);

  while (absN > 0) {
    // 奇数：多乘一次当前底数
    if (absN % 2 === 1) {
      res *= x;
    }
    // 底数平方
    x *= x;
    // 指数折半
    absN = Math.floor(absN / 2);
  }

  // 负指数返回倒数
  return n > 0 ? res : 1 / res;
};