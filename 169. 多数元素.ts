function majorityElement_1(nums: number[]): number {
  // 思路：存储元素出现的次数，查找出现最多的元素
  const numsLen = nums.length;
  const map = new Map();
  for (let i = 0; i < numsLen; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let res = nums[0];
  for (let i = 0; i < numsLen; i++) {
    if (map.get(nums[i]) > map.get(res)) res = nums[i];
  }
  return res;
};

function majorityElement_2(nums: number[]): number {
  // 思路：多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。所以排序后一定在最中间
  nums.sort();
  return nums[Math.floor(nums.length / 2)]
};

function majorityElement_3(nums: number[]): number {
  // 思路：摩尔投票法
  let count = 0;
  let res = nums[0];
  for (let num of nums) {
    if (count === 0) {
      res = num;
    }
    if (num !== res) {
      count--;
    } else {
      count++;
    }
  }
  return res;
}
