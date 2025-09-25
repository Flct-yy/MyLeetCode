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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 初始化结果数组
  const result = [];

  // 递归遍历
  const traverse = (node, level) => {
    // 如果当前节点为空，则返回
    if (!node) return;

    // 如果当前层级不存在，则创建
    if (result[level] === undefined) {
      result[level] = [];
    }

    // 将当前节点的值添加到结果数组中
    result[level].push(node.val);

    // 递归遍历左右子树
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  // 开始遍历
  traverse(root, 0);

  // 返回结果数组
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
 * 队列存储
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 边界条件：空树直接返回空数组
  if (!root) return [];

  // 结果数组，按层存储节点值
  const result = [];
  // 队列用于存储当前层的节点
  const queue = [root];

  // 当队列不为空时，继续遍历
  while (queue.length > 0) {
    
    // 当前层的节点数量
    const levelSize = queue.length;
    // 存储当前层的节点值
    const currentLevel = [];

    // 遍历当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      // 取出队首节点
      const node = queue.shift();
      // 将节点值加入当前层数组
      currentLevel.push(node.val);

      // 若左子节点存在，入队
      if (node.left) queue.push(node.left);
      // 若右子节点存在，入队
      if (node.right) queue.push(node.right);
    }

    // 将当前层的节点值加入结果数组
    result.push(currentLevel);
  }

  return result;
};