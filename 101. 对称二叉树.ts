/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
function isSymmetric_helper(node_1: TreeNode | null, node_2: TreeNode | null): boolean {
  if (!node_1 && !node_2) {
    return true;
  }
  if (!node_1 || !node_2 || node_1.val !== node_2.val) {
    return false;
  }
  return isSymmetric_helper(node_1.left, node_2.right) && isSymmetric_helper(node_1.right, node_2.left);
}

function isSymmetric_1(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return isSymmetric_helper(root.left, root.right);
};

function isSymmetric_2(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  let queue = [root.left, root.right];

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node_1 = queue.shift();
      let node_2 = queue.shift();
      if (!node_1 && !node_2) {
        continue;
      }
      if (!node_1 || !node_2 || node_1.val !== node_2.val) {
        return false;
      }
      queue.push(node_1.left);
      queue.push(node_2.right);

      queue.push(node_1.right);
      queue.push(node_2.left);
    }
  }

  return true;
};