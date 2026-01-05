function canJump_1(nums: number[]): boolean {
  const numsLen = nums.length;
  let cur = 0;
  while (cur < numsLen - 1) {
    let count = 0;
    let aft = cur;
    for (let j = cur + 1; j <= cur + nums[cur]; j++) {
      if (j - cur + nums[j] > count) {
        count = j - cur + nums[j];
        aft = j;
      }
    }
    if (aft === cur) return false;
    cur = aft;
  }
  return true;
};

function canJump_2(nums: number[]): boolean {
  const numsLen = nums.length;
  if (numsLen === 1) return true;
  let maxReach = 0;
  for (let i = 0; i <= maxReach; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= numsLen - 1) return true;
    if (i === maxReach) return false;
  }
  return false;
};