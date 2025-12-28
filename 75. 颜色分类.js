/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 用 prePoint oneCount  aftPoint 将 nums 分成三份 区域
  // [0, prePoint)：已排序的 0 区域
  // [prePoint, prePoint + oneCount)：已排序的 1 区域
  // [prePoint + oneCount, aftPoint)：未排序区域
  // [aftPoint, nums.length)：已排序的 2 区域

  let prePoint = 0, aftPoint = nums.length;
  let oneCount = 0;


  while (prePoint + oneCount < aftPoint) {
    const currIndex = prePoint + oneCount;
    if (nums[currIndex] === 0) {
      // 交换：将0从未排序区域开头，换到0区域的末尾（1区域开头）
      swapNum(nums, prePoint, currIndex);
      // 0区域右扩：0区域的右边界+1
      prePoint++;
    } else if (nums[currIndex] === 1) {
      // 1区域长度+1：1区域的右边界自然右扩
      oneCount++;
    } else if (nums[currIndex] === 2) {
      // 先将2区域左边界左移1位（--aftPoint），指向未排序区域的最后一个元素（2区域新的左边界）
      // 交换：将2从未排序区域开头，换到2区域的开头（未排序区域末尾）
      swapNum(nums, currIndex, --aftPoint);
    }
  }
};

/**
 * 辅助函数：交换数组中两个索引位置的元素
 * @param {number[]} nums 待交换元素的数组
 * @param {number} a 要交换的第一个索引
 * @param {number} b 要交换的第二个索引
 */
function swapNum(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}