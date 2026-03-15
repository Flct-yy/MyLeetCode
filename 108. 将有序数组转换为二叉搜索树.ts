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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const dfs = (left: number, right: number): TreeNode | null => {
    if (left > right)
      return null;
    const mid = Math.floor((left + right) / 2);
    const curNode = new TreeNode(nums[mid], null, null);
    curNode.left = dfs(left, mid - 1);
    curNode.right = dfs(mid + 1, right);
    return curNode;
  }

  return dfs(0, nums.length - 1);
};