function minSubArrayLen(target: number, nums: number[]): number {
  const nL = nums.length;
  if (nL === 0) return 0;
  let left = 0;
  let right = 0;
  let res = nL + 1;
  let sum = nums[0];
  while (left < nL && right < nL) {
    if (sum < target) {
      right++;
      sum += nums[right];
    } else {

      res = Math.min(res, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return res === nL + 1 ? 0 : res;
};