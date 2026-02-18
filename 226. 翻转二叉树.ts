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

function invertTree_1(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree_1(root.left);
  invertTree_1(root.right);
  return root;
};

function invertTree_2(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === undefined) {
      return null;
    }
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return root;
};