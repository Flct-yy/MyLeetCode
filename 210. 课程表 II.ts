function findOrder_1(numCourses: number, prerequisites: number[][]): number[] {
  // 邻接表：key是先修课，value是该先修课的后续课程列表
  const adjacencyList: Map<number, number[]> = new Map();
  // 入度表：记录每个课程需要的先修课数量
  const inDegree: number[] = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    adjacencyList.set(i, []);
  }

  for (const [course, preCourse] of prerequisites) {
    adjacencyList.get(preCourse)?.push(course);
    inDegree[course]++;
  }

  const stack: number[] = [];
  const res: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let finishNum = 0;
  while (stack.length) {
    const currentCourse: number = stack.shift()!;

    const nextCourses = adjacencyList.get(currentCourse);
    if (!nextCourses) continue;
    for (const course of nextCourses) {

      inDegree[course]--;
      if (inDegree[course] === 0) {
        stack.push(course);
      }
    }

    finishNum++;
    res.push(currentCourse);
  }

  return finishNum === numCourses ? res : [];
};

function findOrder_2(numCourses: number, prerequisites: number[][]): number[] {
  const adjacencyList: Map<number, number[]> = new Map();

  for (let i = 0; i < numCourses; i++) {
    adjacencyList.set(i, []);
  }

  for (const [course, preCourse] of prerequisites) {
    adjacencyList.get(preCourse)!.push(course);
  }

  // 0 未访问 1 访问中 2 访问完
  const status: number[] = new Array(numCourses).fill(0)
  const res: number[] = [];

  const hasCycle = (course: number): boolean => {
    if (status[course] === 1) {
      return true;
    } else if (status[course] === 2) {
      return false;
    }

    status[course] = 1;

    const nextCourses = adjacencyList.get(course) || [];

    for (let nextCourse of nextCourses) {
      if (hasCycle(nextCourse)) return true;
    }

    status[course] = 2;
    res.unshift(course);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return [];
  }

  return res;
};