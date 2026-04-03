function hammingWeight_1(n: number): number {
  let res = 0;
  let cur = n;
  while (cur !== 0) {
    const one = cur % 2;
    if (one === 1) res++;
    cur = cur >> 1;
  }
  return res;
};

function hammingWeight_2(n: number): number {
  let res = 0;
  while (n) {
    n &= n - 1;
    res++;
  }
  return res;
};