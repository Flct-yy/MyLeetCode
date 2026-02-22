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

function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0;
  let maxSum = -Infinity;
  const dfs = (node: TreeNode | null) => {
    if (!node) return 0;
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, left + right + node.val);
    return Math.max(left, right) + node.val;
  }

  dfs(root);
  return maxSum;
};