/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 递归
  const buildBST = (left, right) => {
    // 边界条件
    if (left > right) return null;

    // 取中间值作为根节点
    const mid = Math.floor(left + (right - left) / 2);

    // 创建节点
    const node = new TreeNode(nums[mid]);

    // 递归左右子树
    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);

    // 返回节点
    return node;
  }
  // 调用递归函数
  return buildBST(0, nums.length - 1)
};