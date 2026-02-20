/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 * 
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null

  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}

function connect_1(root: _Node | null): _Node | null {
  if (!root) {
    return root;
  }
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (!node) continue;
      if (i < size - 1) {
        node.next = queue[0];
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return root;
};

function connect_2(root: _Node | null): _Node | null {
  if (root === null) {
    return null;
  }
  let start: _Node | null = root;
  while (start !== null) {
    let last: _Node | null = null;
    let nextStart: _Node | null = null;

    // 处理当前层
    const handle = (node: _Node | null) => {
      if (last !== null) {
        last.next = node;
      }
      if (nextStart === null) {
        nextStart = node;
      }
      last = node;
    };

    let current: _Node | null = start;
    while (current) {
      if (current.left) {
        handle(current.left);
      }
      if (current.right) {
        handle(current.right);
      }
      current = current.next;
    }
    start = nextStart;
  }
  return root;
};