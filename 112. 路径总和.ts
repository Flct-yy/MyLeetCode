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

function hasPathSum_1(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  const stack: [TreeNode, number][] = [[root, root.val]];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur) continue;
    const [node, sum]: [TreeNode, number] = cur;

    if (!node.left && !node.right && sum === targetSum) return true;
    if (node.left) stack.push([node.left, sum + node.left.val]);
    if (node.right) stack.push([node.right, sum + node.right.val]);
  }
  return false;
};

function hasPathSum_2(root: TreeNode | null, targetSum: number): boolean {
  // 递归终止条件：空节点（路径中断）
  if (!root) return false;

  // 到达叶子节点，判断剩余目标和是否等于当前节点值
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // 递归遍历左右子树，目标和减去当前节点值
  return hasPathSum_2(root.left, targetSum - root.val)
    || hasPathSum_2(root.right, targetSum - root.val);
}