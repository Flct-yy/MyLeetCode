/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 结果数组
  const res = [];

  const traverse = (node, level) => {
    if (!node) return;

    // 因为是从右边开始遍历，所以 当前 长度等于 level 时，就是当前层的最右边节点
    if (res.length === level) res.push(node.val);

    // 从最右边开始遍历
    traverse(node.right, level + 1);
    traverse(node.left, level + 1);
  }

  traverse(root, 0);

  // 返回结果数组
  return res;
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
 * 迭代遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  const res = [];
  // 队列 用于层序遍历
  const queue = [root];

  while (queue.length) {
    // 当前层节点总数
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      // 当 i === size - 1 时，说明当前节点是最右边的节点 (因为是从左边开始放入)
      if (i === size - 1) res.push(node.val);

      // 因为存入最后面的节点，所以先左子树入队，再右子树入队 (保证最右边节点最后被抽取)
      // 左子树入队
      if (node.left) queue.push(node.left);
      // 右子树入队
      if (node.right) queue.push(node.right);

    }
  }
  // 返回结果数组
  return res;
};