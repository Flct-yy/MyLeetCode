/**
 * 子数组和：子数组 nums[i..j] 的和可以表示为 prefix[j+1] - prefix[i]。
 * 前缀和：计算 nums 的前缀并存储在 map中
 * 对于当前的前缀和 sum，检查 sum - k 是否在哈希表中，
 * 如果在，说明存在若干 i 使得 prefix[j] - prefix[i] = k，即子数组 nums[i..j-1] 的和为 k。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map();
  // 防止出现和刚好为 k 的情况，因此初始化哈希表中添加 0-1 映射
  map.set(0, 1)
  let prefixSum = 0;
  let count = 0;
  for(let i = 0;i < nums.length;i++){
    prefixSum += nums[i];

    const target = prefixSum - k; // 需要查找的目标值 
    if(map.has(target)){
      // 有多少个子数组的和等于 k就有多少子数组
      count+=map.get(target);
    }

    // 记录当前前缀和出现的次数
    map.set(prefixSum,(map.get(prefixSum) || 0) + 1);
  }
  return count;
};

