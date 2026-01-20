function productExceptSelf(nums: number[]): number[] {
  const numsL = nums.length;
  if (numsL === 0) {
    return [];
  }

  const res = new Array(nums.length);

  let leftProduct = 1;
  for (let i = 0; i < numsL; i++) {
    res[i] = leftProduct; // 先赋值（左侧乘积），再更新
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = numsL - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return res;
};