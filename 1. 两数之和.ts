function twoSum_1(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
};

function twoSum_2(nums: number[], target: number): number[] {
  // 先创建包含数值和原始索引的数组，避免排序打乱索引
  const numsWithIndex = nums.map((num, index) => ({ num, index }));

  // 按数值大小排序（只排序新数组，不影响原数组）
  numsWithIndex.sort((a, b) => a.num - b.num);

  let left = 0;
  let right = numsWithIndex.length - 1;

  while (left < right) {
    const sum = numsWithIndex[left].num + numsWithIndex[right].num;
    if (sum === target) {
      // 返回原始索引，而非排序后的索引
      return [numsWithIndex[left].index, numsWithIndex[right].index];
    } else if (sum < target) {
      // 和偏小，左指针右移（增大数值）
      left++;
    } else {
      // 和偏大，右指针左移（减小数值）
      right--;
    }
  }

  // 无符合条件的结果时返回空数组
  return [];
}