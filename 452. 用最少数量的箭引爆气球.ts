function findMinArrowShots(points: number[][]): number {
  // 按Xstart从小到大排序
  const pointsSorted = points.sort((a, b) => a[0] - b[0]);
  const intersection = new Array();
  for (const point of pointsSorted) {
    // 遍历已有交点，如果有交点，则更新交点的右端点
    if (intersection.length === 0) {
      intersection.push(point);
    } else {
      const lastIntersection = intersection[intersection.length - 1];
      // 检查当前气球是否与最后一个有效区间有重叠
      if (point[0] <= lastIntersection[1]) {
        // 有重叠，更新区间的右端点为两者的较小值（关键！）
        // 因为箭必须射在所有重叠气球的共同区间内
        lastIntersection[1] = Math.min(lastIntersection[1], point[1]);
      } else {
        // 无重叠，需要新增一支箭，添加新的区间
        intersection.push(point);
      }
    }
  }
  return intersection.length;
};