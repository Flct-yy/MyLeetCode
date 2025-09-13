/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归实现
 * 先遍历左子树，再访问根节点，最后遍历右子树
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 结果数组：通过闭包让递归函数直接访问，无需作为参数传递（减少冗余）
  const result = [];

  const inorder = (node) => {
    // 边界判断：空节点直接返回，终止递归（避免无效调用）
    if (!node) return;
    // 先遍历左子树（中序遍历的左优先）
    inorder(node.left);
    // 访问根节点（收集当前节点值）
    result.push(node.val);
    // 最后遍历右子树
    inorder(node.right);
  }

  // 启动递归（从根节点开始）
  inorder(root);

  return result;
};