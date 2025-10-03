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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0;

  const helper = (node, path) => {
    if (!node) return;

    // 先将当前节点值加入路径和数组（路径和 = 前一个路径和 + 当前节点值）
    const newPath = [...path.map(val => val + node.val), node.val];
    // 检查新路径中是否有等于targetSum的值，累加计数
    newPath.forEach(sum => {
      if (sum === targetSum) count++;
    });

    helper(node.left, newPath);
    helper(node.right, newPath);
  }
  helper(root, []);

  return count;
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
 * 双重递归
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  // 内层递归：从当前节点出发，向下计算路径和
  const dfs = (node, currentSum) => {
    if (!node) return 0; // 节点为空，无路径

    // 当前路径和 = 之前的和 + 当前节点值
    currentSum += node.val;

    // 若当前和等于目标值，计数+1，再加上左右子树的符合条件的路径数
    return (currentSum === targetSum ? 1 : 0)
      + dfs(node.left, currentSum)
      + dfs(node.right, currentSum);
  };

  // 外层递归：对每个节点，都作为起点计算一次
  return dfs(root, 0)          // 以当前节点为起点的路径数
    + pathSum(root.left, targetSum)  // 左子树所有节点作为起点的路径数
    + pathSum(root.right, targetSum); // 右子树所有节点作为起点的路径数
};