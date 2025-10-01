/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let node = root;
  while(node){
    // 当前节点有左子树，则将左子树链接到当前节点的右边
    if(node.left){
      // 提前保存左右子树
      let right = node.right;
      let left = node.left;

      // 将左子树的右子树链接到当前节点的右边 左子树为null
      node.right = left;
      node.left = null;

      // 找到当前节点的右边的最后一个节点 (因为左子树可能有右子树)
      let prev = node;
      while(prev.right){
        prev = prev.right;
      }
      // 将右子树链接到prev(最右边的节点)的右边
      prev.right = right;
      // node指向node的新右子树(之前的左子树)
      node = left;
    }else{
      // 当前节点没有左子树，则移动到右子树
      node = node.right;
    }
  }
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
 * 递归
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
  if(!root) return;
  
  // 左子树展开
  flatten(root.left);
  
  // 右子树展开
  flatten(root.right);
  
  const right = root.right;
  
  // 左子树的右子树链接到当前节点的右边
  root.right = root.left;
  root.left = null;
  
  // 找到当前节点的右边的最后一个节点 (因为左子树可能有右子树)
  let prev = root;
  while(prev.right){
    prev = prev.right;
  }
  // 将右子树链接到prev(最右边的节点)的右边
  prev.right = right;
};