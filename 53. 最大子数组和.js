/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const map = new Map(); // 存储每个位置的前缀和
    let numSum = 0;        // 当前前缀和
    let res = nums[0];     // 最大子数组和，初始化为第一个元素
    
    // 第一遍遍历：计算前缀和并记录最大值
    for(let i = 0; i < nums.length; i++){
      numSum += nums[i];           // 累加得到当前位置的前缀和
      res = Math.max(res, numSum); // 更新最大值（处理从0开始到当前位置的子数组）
      map.set(i, numSum);          // 存储前缀和到Map中
    }
    
    let minSum = 0; // 最小前缀和，初始为0（空子数组的前缀和）
    
    // 第二遍遍历：计算最大差值（当前前缀和 - 最小前缀和）
    for(let i = 0; i < nums.length; i++){
      // 当前子数组和 = 当前前缀和 - 之前的最小前缀和
      res = Math.max(res, map.get(i) - minSum);
      // 更新最小前缀和
      minSum = Math.min(minSum, map.get(i));
    }
    
    return res;
};

/**
 * 优化
 * 最大子数组和 = 当前前缀和 - 最小前缀和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let numSum = 0;    // 当前前缀和（累加和）
  let res = nums[0]; // 最大子数组和，初始化为第一个元素
  let minSum = 0;    // 最小前缀和，初始为0（空子数组）
  
  for(let i = 0; i < nums.length; i++){
    numSum += nums[i];                 // 计算当前位置的前缀和
    res = Math.max(res, numSum - minSum); // 更新最大值：当前前缀和 - 之前的最小前缀和
    minSum = Math.min(minSum, numSum); // 更新最小前缀和
  }
  
  return res;
};

/**
 * 经典的 Kadane's 算法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let current = nums[0]; // 以当前元素结尾的最大子数组和
  let max = nums[0];     // 全局最大子数组和
  
  for(let i = 1; i < nums.length; i++) {
    // 关键决策：要么从当前元素重新开始子数组，要么延续之前的子数组
    // 如果current > 0，说明之前的子数组和对后续有贡献，可以继续累加
    // 如果current <= 0，说明之前的子数组和是负担，应该从当前元素重新开始
    current = nums[i] + (current > 0 ? current : 0);
    
    // 更新全局最大值
    if (current > max) max = current;
  }
  
  return max;
};