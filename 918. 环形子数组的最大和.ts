function maxSubarraySumCircular_1(nums: number[]): number {
  if (nums.length === 0) return 0;
  let curMax = nums[0], maxSum = nums[0];
  let curMin = nums[0], minSum = nums[0];
  let totalSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], curMax + nums[i]);
    maxSum = Math.max(maxSum, curMax);

    curMin = Math.min(nums[i], curMin + nums[i]);
    minSum = Math.min(minSum, curMin);

    totalSum += nums[i];
  }

  if (maxSum < 0) {
    return maxSum;
  }

  // 环形最大和 = max(普通最大和, 总和 - 最小子数组和)
  return Math.max(maxSum, totalSum - minSum);
};

function maxSubarraySumCircular_2(nums: number[]): number {
  let n: number = nums.length;
  // 记录从 0 开始的以n结尾区间的最大 0 开头的前缀和
  const leftMax = new Array(n).fill(0);
  // 对坐标为 0 处的元素单独处理，避免考虑子数组为空的情况
  leftMax[0] = nums[0];
  let leftSum: number = nums[0];
  let pre: number = nums[0];
  let res: number = nums[0];
  for (let i = 1; i < n; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    res = Math.max(res, pre);
    leftSum += nums[i];
    leftMax[i] = Math.max(leftMax[i - 1], leftSum);
  }

  // 从右到左枚举后缀，固定后缀，选择最大前缀
  let rightSum = 0;
  for (let i = n - 1; i > 0; i--) {
    rightSum += nums[i];
    res = Math.max(res, rightSum + leftMax[i - 1]);
  }
  return res;
};