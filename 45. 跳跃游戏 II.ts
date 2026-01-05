function jump_1(nums: number[]): number {
  const numsLen = nums.length;
  if (numsLen === 1) return 0;
  let count = 0;
  let cur = 0;
  while (cur < numsLen - 1) {
    let maxNextReach = 0;
    let aft = cur;
    for (let j = cur + 1; j <= cur + nums[cur]; j++) {
      if (j === numsLen - 1) {
        return count + 1;
      }
      if (j - cur + nums[j] >= maxNextReach) {
        maxNextReach = j - cur + nums[j];
        aft = j;
      }
    }
    if (aft === cur) return -1;
    cur = aft;
    count++;
  }
  return count;
};

function jump_2(nums: number[]): number {
  const numsLen = nums.length;
  if (numsLen === 1) return 0;
  let count = 0;
  let maxIndex = 0; // 表示当前步数可走的区域
  let border = 0;
  let maxReach = 0;
  for (let i = 0; i <= maxReach; i++) {
    // 先判断有没有超边界
    if (i > border) {
      border = maxReach;
      count++;
    }
    // 再判断是不是最后一个元素
    if (i === numsLen - 1) return count;
    if (i + nums[i] >= maxReach) {
      maxIndex = i;
      maxReach = i + nums[i];
    }
  }
  return count;
};

