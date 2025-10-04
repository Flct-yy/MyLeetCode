/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 如果左子树和右子树分别包含p和q，那么当前节点就是它们的最近公共祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // lowestCommonAncestor 只可能返回 null 和 确定的node
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 第一种情况 左右都有node返回
  if (left !== null && right !== null) {
    return root;
  }
  // 第二种情况 一个有 另一个没有
  // 第三种情况 左右都返回null
  // 如果left为null 则返回right (如果right也为null则为第三种情况)
  return left !== null ? left : right;
};