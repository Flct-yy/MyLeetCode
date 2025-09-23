/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 反转二叉树 先让左右子树都反转(使用递归)，然后交换左右子树的指向
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)return null;
    
    invertTree(root.left);
    
    invertTree(root.right);
    
    const oldLeft = root.left;
    root.left = root.right;
    root.right = oldLeft;
    
    return root;
};