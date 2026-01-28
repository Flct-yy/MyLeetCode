function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;
  
  // 边界条件：数组长度小于3直接返回空
  if (n < 3) return res;
  
  // 1. 排序（核心前提，用于去重和双指针移动）
  nums.sort((a, b) => a - b);
  
  // 2. 固定第一个数，用双指针找另外两个数
  for (let i = 0; i < n; i++) {
    // 去重：当前数和前一个数相同，跳过（避免重复三元组）
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    // 优化：第一个数大于0，后面的数都>=它，和不可能为0，直接退出
    if (nums[i] > 0) break;
    
    // 双指针：左指针从i+1开始，右指针从数组末尾开始
    let left = i + 1;
    let right = n - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        // 找到符合条件的三元组，加入结果
        res.push([nums[i], nums[left], nums[right]]);
        
        // 去重：左指针跳过重复值
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 去重：右指针跳过重复值
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        // 移动指针找下一组
        left++;
        right--;
      } else if (sum < 0) {
        // 和太小，左指针右移（增大数值）
        left++;
      } else {
        // 和太大，右指针左移（减小数值）
        right--;
      }
    }
  }
  
  return res;
}