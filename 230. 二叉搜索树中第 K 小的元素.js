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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 结果
  let result = null;

  // 计数器
  let count = 0;

  // 二叉搜索树: 左子树节点值 < 根节点值 < 右子树节点值
  function inorder(node) {
    // 空节点
    if (!node) return;

    // 先遍历左子树
    inorder(node.left);

    // 从最小的节点开始计数(二叉搜索树)
    count++;
    // 当计数器等于k时，当前节点就是第k小的元素
    if (count === k) {
      result = node.val;
      return;
    }
    // 遍历右子树
    inorder(node.right);
  }

  inorder(root);

  return result;
};

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 因为二叉搜索树的性质，左子树节点值 < 根节点值 < 右子树节点值
  // 存储中序遍历结果
  const result = [];

  // 递归遍历二叉树
  function inorder(node) {
    if (!node) return;

    // 先遍历左子树
    inorder(node.left);

    // 记录当前节点值
    result.push(node.val);

    // 遍历右子树
    inorder(node.right);
  }

  // 调用递归函数
  inorder(root);

  // 返回第k小的元素
  return result[k - 1];
};