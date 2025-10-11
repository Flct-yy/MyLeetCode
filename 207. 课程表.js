/**
 * 广度优先搜索（BFS） 算法
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

  // prerequisites 数组的每一项代表一个先修课程对，其格式为 [课程1, 课程2]，表示课程1先修课程2

  const inDegree = new Array(numCourses).fill(0);
  const map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    // 统计每个课程的入度
    inDegree[prerequisites[i][0]]++;

    // 构建邻接表
    // [课程1, 课程2]
    // map 保存 课程2 的 出度有那些
    if (!map.has(prerequisites[i][1])) {
      map.set(prerequisites[i][1], []);
    }
    map.get(prerequisites[i][1]).push(prerequisites[i][0]);
  }

  const queue = [];
  // 入度为 0 的课程加入队列
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  // count 记录已经完成的课程数
  let count = 0;
  while (queue.length) {
    // 取出队首的课程 完成课程数 +1
    const course = queue.shift();
    count++;

    // 获取 course 的 出度 课程，入度 -1 如果入度为 0 加入队列
    const nextCourses = map.get(course);
    if (nextCourses) {
      for (let i = 0; i < nextCourses.length; i++) {
        inDegree[nextCourses[i]]--;
        if (inDegree[nextCourses[i]] === 0) {
          queue.push(nextCourses[i]);
        }
      }
    }
  }

  // 如果已完成的课程数等于课程总数，说明可以完成所有课程，返回 true
  // 否则，说明不能完成所有课程，返回 false
  return count === numCourses;
};