function rob(nums: number[]): number {
  // 没有房子
  if (nums.length === 0) return 0;

  const size = nums.length;
  // 只有一间房
  if (size === 1) return nums[0];

  // dp 数组
  const dp: number[] = new Array(size);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // 递推
  for (let i = 2; i < size; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[size - 1];
};