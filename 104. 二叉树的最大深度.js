/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 使用递归的方式求二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 空树的最大深度为0
  if (!root) {
    return 0;
  }
  // 递归求左右子树的最大深度
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  // 返回左右子树的最大深度的最大值加1
  return Math.max(left, right) + 1;
};