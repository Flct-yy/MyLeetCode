/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: 前序遍历的第一个节点为根节点，在中序遍历中找到根节点的位置，左边为左子树，右边为右子树，递归构造左右子树。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 构建中序序列的哈希映射（值 -> 索引），加速查找根节点位置
  const inorderMap = new Map();
  inorder.forEach((val, idx) => inorderMap.set(val, idx));

  const build = (preStart, preEnd, inStart, inEnd) => {
    // 边界条件
    if(preStart > preEnd || inStart > inEnd){
      return null;
    }

    // 前序遍历的第一个节点为根节点
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);

    // 在中序遍历中找到根节点的位置
    const inRootIdx = inorderMap.get(rootVal);
    // 左子树的大小
    const leftSize = inRootIdx - inStart;

    // 递归构造左右子树
    // 前序遍历中左子树的范围为 [preStart + 1, preStart + leftSize]
    // 中序遍历中左子树的范围为 [inStart, inRootIdx - 1]
    root.left = build(preStart + 1, preStart + leftSize, inStart, inRootIdx - 1);
    root.right = build(preStart + leftSize + 1, preEnd, inRootIdx + 1, inEnd);

    return root;
  }

  return build(0, preorder.length - 1, 0, inorder.length - 1)
};