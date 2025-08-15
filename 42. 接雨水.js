/**
 * 两遍遍历
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 找到最大的高度
  const maxH = Math.max(...height);
  // 找到最大值的索引
  const maxIndex = height.indexOf(maxH); 
  //分别 从左往右 和 从右往左 向最高的索引遍历
  let leftM = 0,rightM = 0,area = 0;
  // 从左往右
  for(let i = 0;i < maxIndex; i++){
    // 判断左边的最大值
    leftM = Math.max(leftM,height[i]);
    // 因为最高的肯定大于等于 leftM 和 rightM 所以只需要看左边最高的与当前高度差多少 就是当前位置的水量 
    area += leftM - height[i];
  }
  // 从右往左
  for(let i = height.length-1;i > maxIndex; i--){
    // 判断右边的最大值
    rightM = Math.max(rightM,height[i]);
    area += rightM - height[i];
  }

  return area;
};

/**
 * 优化双指针
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 初始化双指针：left 从左侧开始，right 从右侧开始
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let area = 0;

    while (left < right) {
      // 当左边小于右边时才会指行
      if (height[left] < height[right]) {
          if (height[left] >= leftMax) {
              // 更新左边最大值( 左边的值小于右边的值且左边的值大于等于左边最大值 )
              leftMax = height[left];
          } else {
              // 计算当前位置的水量(因为左边的最大值小于右边的值所以左边的最大值减去当前位置的值就是当前位置的水量)
              area += leftMax - height[left];
          }
          left++;
      } else {
          if (height[right] >= rightMax) {
              rightMax = height[right];
          } else {
              area += rightMax - height[right];
          }
          right--;
      }
    }

    return area;
};