function mySqrt_1(x: number): number {
  if (x === 0) return 0;
  let res = 1;
  for (let i = 1; i <= x / 2; i++) {
    if (i * i <= x) {
      res = i;
    }
  }
  return res;
};

function mySqrt_2(x: number): number {
  let left = 0;
  let right = Math.max(x >> 1, 1);
  let res = 0;
  while (left <= right) {
    const mid = (left + right) >> 1;

    if (mid * mid <= x) {
      left = mid + 1;
      res = mid;
    } else {
      right = mid - 1;
    }
  }
  return res;
};