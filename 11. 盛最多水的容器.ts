function maxArea(height: number[]): number {
  const hL = height.length;
  let left = 0, right = hL - 1;
  let res = 0;
  let currentMinH = 0;
  while (left < right) {
    const minH = Math.min(height[left], height[right]);
    if (minH > currentMinH) {
      res = Math.max(res, (right - left) * minH);
      currentMinH = minH;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};