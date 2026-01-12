function hIndex_1(citations: number[]): number {
  const ciLen = citations.length;
  const count = new Array(ciLen + 1).fill(0);
  for (let i = 0; i < ciLen; i++) {
    if (citations[i] > ciLen) {
      count[ciLen]++;
    } else {
      count[citations[i]]++;
    }
  }
  let total = 0;
  for (let i = ciLen; i >= 0; i--) {
    total += count[i];
    if (total >= i) {
      return i;
    }
  }
  return 0;
};

function hIndex_2(citations: number[]): number {
  // 思路：逆序排序
  citations.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      res = i + 1;
    }
  }
  return res;
};