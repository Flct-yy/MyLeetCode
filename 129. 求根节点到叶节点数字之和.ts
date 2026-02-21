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

function sumNumbers_1(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let sum = 0;
  const stack: [TreeNode, number][] = [[root, root.val]];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur) continue;
    const [node, val]: [TreeNode, number] = cur;

    if (!node.left && !node.right) {
      sum += val;
    }
    if (node.left) {
      stack.push([node.left, val * 10 + node.left.val]);
    }
    if (node.right) {
      stack.push([node.right, val * 10 + node.right.val]);
    }
  }
  return sum;
};

function sumNumbers_2(root: TreeNode | null): number {
  if (!root) return 0;
  let sum = 0;
  const helper = (node: TreeNode | null, val: number): void => {
    if (!node) return;
    if (!node.left && !node.right) {
      sum += val;
    }
    if (node.left) {
      helper(node.left, val * 10 + node.left.val);
    }
    if (node.right) {
      helper(node.right, val * 10 + node.right.val);
    }
  }
  helper(root, root.val);
  return sum;
};