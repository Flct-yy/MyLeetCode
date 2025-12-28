/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const nLen = nums.length;
  let i = nLen - 2;
  // 从后往前找第一个升序对 nums[i] < nums[i + 1]
  // 核心逻辑：i是第一个能让排列变大的“突破口”，i之后的元素都是降序（已是最大排列，无法再变大）
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 若找到升序对（i>=0，说明不是最大排列）
  if (i >= 0) {
    // 从后往前找第一个比nums[i]大的数nums[j]
    // 核心逻辑：j是能和i交换、让排列变大且增量最小的数（保证是“下一个”而非“任意更大”）
    let j = nLen - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    // 交换i和j的元素
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 反转i+1到数组末尾的元素
  // 核心逻辑：i之后的元素原本是降序，反转后变为升序，保证这部分是最小字典序
  // 若i=-1（最大排列），则反转整个数组，得到最小字典序
  let left = i + 1, right = nLen - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};