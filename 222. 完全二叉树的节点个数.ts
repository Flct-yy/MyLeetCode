/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function countNodes_1(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let count = 1;
  let level = [root];
  while (level.length) {
    const nextLevel = [];
    for (const node of level) {
      if (node.left) {
        nextLevel.push(node.left);
      }
      if (node.right) {
        nextLevel.push(node.right);
      }
    }
    count += nextLevel.length;
    level = nextLevel;
  }

  return count;
};

function countNodes_2(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let level = 0;
  let node = root;
  // level 是除去 最后一层 的层数
  while (node.left !== null) {
    level++;
    node = node.left;
  }

  // 最后一层的节点编号范围：
  // low = 2^level → 最后一层第一个节点的编号
  // high = 2^(level+1) - 1 → 最后一层最后一个节点的最大可能编号
  let low = 1 << level, high = (1 << (level + 1)) - 1;
  while (low < high) {
    // 二分查找
    // 中间节点的编号
    const mid = (low + high + 1) >> 1;
    if (exists(root, level + 1, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

const exists = (root: TreeNode | null, level: number, k: number): boolean => {
  let bits = 1 << (level - 2);
  let node = root;
  while (node !== null && bits > 0) {
    if (!(bits & k)) {
      node = node.left;
    } else {
      node = node.right;
    }
    // 右移一位
    bits >>= 1;
  }
  return node !== null;
}