function lengthOfLIS_1(nums: number[]): number {
  const N = nums.length;
  if (N === 0) return 0;
  const dp = new Array(N).fill(1);
  for (let i = 0; i < N; i++) {
    let res = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        res = Math.max(dp[j] + 1, res);
      }
    }
    dp[i] = res;
  }
  return Math.max(...dp);
};


function lengthOfLIS_2(nums: number[]): number {
  const N = nums.length;
  if (N === 0) return 0;
  const dp: number[] = [];
  for (const num of nums) {
    if (num > dp[dp.length - 1]) {
      dp.push(num);
    } else {
      let [l, r] = [0, dp.length - 1];
      let res = 0;
      while (l <= r) {
        const mid = (l + r) >> 1;
        if (num <= dp[mid]) {
          r = mid - 1;
          res = mid;
        } else {
          l = mid + 1;
        }
      }
      dp[res] = num;
    }
  }
  return dp.length;
};