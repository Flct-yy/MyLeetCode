/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const numsLen = nums.length;
  if (numsLen === 0) return 0;
  // maxDp[i]：以 nums[i] 结尾的连续子数组的「最大乘积」
  // minDp[i]：以 nums[i] 结尾的连续子数组的「最小乘积」（应对负负得正场景）
  const maxDp = new Array(numsLen);
  const minDp = new Array(numsLen);

  maxDp[0] = nums[0];
  minDp[0] = nums[0];
  let maxS = nums[0];

  for (let i = 1; i < numsLen; i++) {
    // 计算maxDp[i]：以nums[i]结尾的最大乘积，有三种选择：
    // 1. 延续前一个的最大乘积 × 当前元素（前序最大×当前数，保持连续）
    // 2. 延续前一个的最小乘积 × 当前元素（前序最小可能为负，当前数为负时→负负得正，可能成为更大值）
    // 3. 仅取当前元素本身（前序乘积为负/0时，重新开始子数组更优）
    maxDp[i] = Math.max(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i], nums[i]);
    minDp[i] = Math.min(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i], nums[i]);
    maxS = Math.max(maxS, maxDp[i]);
  }

  return maxS;
};