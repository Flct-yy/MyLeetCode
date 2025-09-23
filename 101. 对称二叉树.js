/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归判断是否对称
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 空树也是对称的
  if (!root) return true;

  const isMirror = (left, right) => {
    if (!left && !right) return true;

    // 因为已经验证了左右子树都为空，所以这里不需要再判断
    if (!left || !right) return false;

    // 左右子树都不为空，比较值
    if (left.val !== right.val) return false;

    // 递归判断左右子树是否对称
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(root.left, root.right)
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
 * 使用队列实现层序遍历，判断是否对称
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const quene = [root.left, root.right];
  
  // 队列为空，说明已经遍历完毕，返回 true
  while (quene.length > 0) {
    // 取出左右子树
    const left = quene.shift();
    const right = quene.shift();

    // 左右子树都为空，继续下一层
    if (!left && !right) continue;

    // 左右子树有一个为空，说明不对称，返回 false
    if (!left || !right) return false;
    
    // 左右子树都不为空，比较值
    if (left.val !== right.val) return false;
    
    // 将左右子树两两入队
    quene.push(left.left, right.right, left.right, right.left);
  }

  return true;
};