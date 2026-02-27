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

function isValidBST_1(root: TreeNode | null): boolean {
  if (!root) return true;

  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  let prev: number = -Infinity;

  // 迭代式中序遍历（左-根-右）
  while (current !== null || stack.length > 0) {
    // 先遍历到最左侧节点
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;
    if (current.val <= prev) {
      return false;
    }
    prev = current.val;

    current = current.right;
  }

  // 所有节点验证通过
  return true;
}

function isValidBST_2(root: TreeNode | null): boolean {
  if (!root) return true;

  const helper = (node: TreeNode | null, min: number, max: number): boolean => {
    if (!node) return true;

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
  }

  return helper(root, -Infinity, Infinity);
};