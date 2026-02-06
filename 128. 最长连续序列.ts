function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let maxLen = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let len = 1;
      let next = num + 1;
      while (set.has(next)) {
        len++;
        next++;
      }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
};