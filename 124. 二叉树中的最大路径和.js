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
var maxPathSum = function (root) {
  // 最大路径和
  let maxPath = -Infinity;

  // 递归求解
  const maxSum = (node) => {
    if (!node) return -Infinity;
    // 左子树最大路径和
    const left = Math.max(maxSum(node.left), 0);
    // 右子树最大路径和
    const right = Math.max(maxSum(node.right), 0);
    // 当前节点的最大路径和
    if (left + right + node.val > maxPath) {
      maxPath = left + right + node.val;
    }

    return node.val + Math.max(left, right);
  };

  maxSum(root);

  return maxPath;
};