function trap(height: number[]): number {
  const hL = height.length;
  let left = 0;
  let leftMax = height[0];
  let right = hL - 1;
  let rightMax = height[hL - 1];
  let res = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      left++;
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        res += leftMax - height[left];
      }
    } else {
      right--;
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        res += rightMax - height[right];
      }
    }
  }
  return res;
};