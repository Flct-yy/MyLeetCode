function canFinish_1(numCourses: number, prerequisites: number[][]): boolean {
  // 邻接表：key是先修课，value是该先修课的后续课程列表
  const adjacencyList: Map<number, number[]> = new Map();
  // 入度表：记录每个课程需要的先修课数量
  const inDegree: number[] = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    adjacencyList.set(i, []);
  }

  for (const [course, preCourse] of prerequisites) {
    // 学习course需要先学preCourse，所以preCourse的后续课程是course
    adjacencyList.get(preCourse)!.push(course);
    // course的入度+1（需要多学一门先修课）
    inDegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let completedCourses = 0; // 记录已完成的课程数
  while (queue.length > 0) {
    const currentCourse = queue.shift()!; // 取出队列头部课程
    completedCourses++;

    // 获取当前课程的所有后续课程
    const nextCourses = adjacencyList.get(currentCourse)!;
    for (const nextCourse of nextCourses) {
      // 后续课程的入度减1（完成了一门先修课）
      inDegree[nextCourse]--;
      // 如果入度变为0，说明该课程的所有先修课都完成了，可以学习
      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return completedCourses === numCourses;
};

function canFinish_2(numCourses: number, prerequisites: number[][]): boolean {
  // 邻接表：key是先修课，value是该先修课的后续课程列表
  const adjacencyList: Map<number, number[]> = new Map();

  for (let i = 0; i < numCourses; i++) {
    adjacencyList.set(i, []);
  }

  for (const [course, preCourse] of prerequisites) {
    // 学习course需要先学preCourse，所以preCourse的后续课程是course
    adjacencyList.get(preCourse)!.push(course);
  }

  // 0=未访问，1=访问中，2=已访问
  const status: number[] = new Array(numCourses).fill(0);

  const hasCycle = (course: number): boolean => {
    if (status[course] === 1) {
      return true;
    }
    if (status[course] === 2) {
      return false;
    }

    status[course] = 1;
    const nextCourses = adjacencyList.get(course) || [];

    for (const next of nextCourses) {
      // 递归检测后续课程，若发现环则向上传递
      if (hasCycle(next)) return true;
    }

    status[course] = 2;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
};