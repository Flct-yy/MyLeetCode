function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  // 1. 构建图：邻接表存储，格式为 { 节点: { 邻居: 权重 } }
  const graph: Record<string, Record<string, number>> = {};

  // 初始化图并添加边
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];

    if (!graph[a]) graph[a] = {};
    if (!graph[b]) graph[b] = {};

    graph[a][b] = values[i];
    graph[b][a] = values[i] === 0 ? 0 : 1 / values[i];
  }

  // 2. 定义 BFS 函数，计算 start / end 的结果
  const bfs = (start: string, end: string): number => {
    // 如果起始节点或目标节点不存在，直接返回 -1
    if (!graph[start] || !graph[end]) return -1.0;
    // 如果是同一个节点，返回 1.0
    if (start === end) return 1.0;

    // 初始化队列和已访问集合
    const queue: [string, number][] = [[start, 1.0]];
    const visited = new Set<string>([start]);

    while (queue.length > 0) {
      const [current, product] = queue.shift()!;

      const nexts = graph[current];
      for (let next in nexts) {
        if (visited.has(next)) {
          continue;
        }

        const newProduct = product * graph[current][next];

        if (next === end) return newProduct;

        queue.push([next, newProduct]);
        visited.add(next);
      }
    }

    // 遍历完所有路径都没找到，返回 -1
    return -1.0;
  };

  // 3. 处理所有查询
  return queries.map(([c, d]) => bfs(c, d));
}