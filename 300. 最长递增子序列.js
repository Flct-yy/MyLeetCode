/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 数组的长度
  const numsLen = nums.length;
  // dp[i] 表示以 nums[i] 这个元素结尾的最长递增子序列的长度。
  const dp = new Array(numsLen).fill(1);

  for (let i = 0; i < numsLen; i++) {
    for (let j = 0; j < i; j++) {
      // 如果前面的某个元素nums[j]比当前元素nums[i]小，
      // 说明nums[i]可以接在nums[j]后面，形成一个更长的递增子序列。
      if (nums[i] > nums[j]) {
        // 此时，以nums[i]结尾的最长子序列长度，
        // 要么是它自己本身的长度(dp[i])，
        // 要么是在以nums[j]结尾的最长子序列长度基础上加1 (dp[j] + 1)。
        // 我们取这两者中的较大值来更新dp[i]。
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  return Math.max(...dp);
};