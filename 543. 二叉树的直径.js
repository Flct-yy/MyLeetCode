/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // 递归求二叉树的直径
  let diameter = 0;
  const maxDepth = (root) => {
    if (!root) return 0;
    // 左右子树的深度
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    // 记录最大直径
    diameter = Math.max(diameter, leftDepth + rightDepth);
    // 返回当前节点的深度
    return Math.max(leftDepth, rightDepth) + 1;
  }
  maxDepth(root);
  // 返回二叉树的直径
  return diameter;
};