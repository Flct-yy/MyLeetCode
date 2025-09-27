/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 递归函数
  const validate = (node, min, max) => {
    // 空节点返回 true
    if (!node) return true;

    // 节点值不在区间内返回 false
    if (node.val <= min || node.val >= max) return false;

    // 左右子树递归验证
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
  }

  // 启动递归验证
  return validate(root, -Infinity, Infinity)
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
 * 中序遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 存储中序遍历结果
  const inorder = [];

  // 中序遍历函数
  const traverse = (node) => {
    if(!node) return;

    // 显示从左开始放入 再是中间node 再是右子树 所以会出现递增的情况
    traverse(node.left);
    // 存储节点值
    inorder.push(node.val);
    traverse(node.right);
  }

  // 启动中序遍历
  traverse(root);


  // 验证是否为二叉搜索树
  for(let i = 1; i < inorder.length; i++) {
    // 若当前节点值小于等于前一个节点值 则不是二叉搜索树
    if(inorder[i] <= inorder[i-1]) return false;
  }

  return true;
};