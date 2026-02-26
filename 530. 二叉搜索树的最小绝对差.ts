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

function getMinimumDifference_1(root: TreeNode | null): number {
  if (!root) return 0;
  let min = Infinity;
  let pre = -Infinity;
  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;
  while (curr) {
    stack.push(curr);
    curr = curr.left;
  }
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    if (node.right) {
      let right: TreeNode | null = node.right;
      while (right) {
        stack.push(right);
        right = right.left;
      }
    }
    min = Math.min(min, Math.abs(pre - node.val));
    pre = node.val;
  }

  return min;
};

function getMinimumDifference_2(root: TreeNode | null): number {
  if (!root) return 0;
  let min = Infinity;
  let pre = -Infinity;
  const dfs = (node: TreeNode) => {
    if (!node) return;
    if(node.left)dfs(node.left);
    min = Math.min(min, Math.abs(pre - node.val));
    pre = node.val;
    if(node.right)dfs(node.right);
  }
  dfs(root);
  return min;
};