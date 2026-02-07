function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];
  // 边界处理：空数组直接返回空结果
  if (nums.length === 0) return res;

  let start = 0;
  let end = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      if (start === end) {
        res.push(nums[start].toString());
      } else {
        res.push(`${nums[start]}->${nums[end]}`);
      }
      start = i;
      end = i;
    } else {
      end = i;
    }
  }
  if (start === end) {
    res.push(nums[start].toString());
  } else {
    res.push(`${nums[start]}->${nums[end]}`);
  }
  return res;
};