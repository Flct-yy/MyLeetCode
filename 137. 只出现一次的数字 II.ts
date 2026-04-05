function singleNumber_1(nums: number[]): number {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const [num, occ] of freq.entries()) {
    if (occ === 1) {
      ans = num;
      break;
    }
  }
  return ans;
};

function singleNumber_2(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    for (const num of nums) {
      total += ((num >> i) & 1);
    }
    if (total % 3 != 0) {
      ans |= (1 << i);
    }
  }
  return ans;
};