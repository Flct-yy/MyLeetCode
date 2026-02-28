/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */

class _Node {
  val: number
  neighbors: _Node[]

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val === undefined ? 0 : val)
    this.neighbors = (neighbors === undefined ? [] : neighbors)
  }
}

function cloneGraph_1(node: _Node | null): _Node | null {
  if (!node) {
    return null;
  }
  const visited = new Map();
  const queue = [node];
  visited.set(node, new _Node(node.val));
  while (queue.length) {
    const curr = queue.shift()!;
    for (const neighbor of curr.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new _Node(neighbor.val));
        queue.push(neighbor);
      }
      visited.get(curr)!.neighbors.push(visited.get(neighbor)!);
    }
  }
  return visited.get(node);
};

function cloneGraph_2(node: _Node | null): _Node | null {
  if (!node) {
    return null;
  }
  const visited = new Map();
  
  const cloneNode = (node: _Node): _Node => {
    if (visited.has(node)) {
      return visited.get(node)!;
    }
    const clone = new _Node(node.val);
    visited.set(node, clone);
    for (const neighbor of node.neighbors) {
      clone.neighbors.push(cloneNode(neighbor));
    }
    return clone;
  }

  return cloneNode(node);
};