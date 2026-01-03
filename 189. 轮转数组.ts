/**
 Do not return anything, modify nums in-place instead.
 */
function rotate_1(nums: number[], k: number): void {
  // 思路：创建新数组来存储
  const numsLen = nums.length;
  const resArr = new Array(numsLen);
  for (let i = 0; i < numsLen; i++) {
    resArr[(i + k) % numsLen] = nums[i]
  }
  for (let i = 0; i < numsLen; i++) {
    nums[i] = resArr[i];
  }
};

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate_2(nums: number[], k: number): void {
  // 思路：原地交换
  const numsLen = nums.length;
  k = k % numsLen;
  // 求最大公约数
  const gcd = (x: number, y: number): number => y ? gcd(y, x % y) : x;
  const count = gcd(k, numsLen)

  for (let start = 0; start < count; start++) {
    let current = start;
    let prev = nums[start];
    do {
      const next = (current + k) % numsLen;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
    } while (current !== start);
  }
};

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate_3(nums: number[], k: number): void {
  //思路：反转数组
  function reverseSubArray(arr: number[], start: number, end: number): void {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  const numsLen = nums.length;
  k = k % numsLen;
  reverseSubArray(nums, 0, numsLen - 1);
  reverseSubArray(nums, 0, k - 1);
  reverseSubArray(nums, k, numsLen - 1);
};