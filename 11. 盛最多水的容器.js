/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 设置 左右指针指向左右边界
    let left = 0, right = height.length - 1, maxArea = 0;
    // 当左指针小于右指针时，继续计算
    while(left<right){
      //计算当下的面积,并判断是否为最大值
      const area = Math.min(height[left],height[right])*(right-left);
      maxArea = Math.max(area,maxArea);

      // 判断左右两边哪个最小,并将最小的向里移动
      // 因为移动较高的边只会让水量不变或更小
      if(height[left]<height[right]){
        left++;
      }else{
        right--;
      }
    }
    return maxArea;
};