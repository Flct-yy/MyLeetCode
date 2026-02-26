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

function kthSmallest_1(root: TreeNode | null, k: number): number {
  if (!root) return 0;
  let res = 0;
  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;
  while (curr) {
    stack.push(curr);
    curr = curr.left;
  }
  while (stack.length) {
    const node = stack.pop()!;

    let right = node.right;
    while (right) {
      stack.push(right);
      right = right.left;
    }

    k--;
    if (k === 0) {
      res = node.val;
      break;
    }
  }
  return res;
};

function kthSmallest_2(root: TreeNode | null, k: number): number {
  if (!root) return 0;
  let res = 0;
  // 递归中序遍历函数
  const helper = (node: TreeNode | null) => {
    if (!node || k === 0) return; // k为0时提前终止递归（模拟提前退出）
    helper(node.left); // 遍历左子树（左）
    // 处理当前节点（根）
    k--;
    if (k === 0) {
      res = node.val;
      return;
    }
    helper(node.right); // 遍历右子树（右）
  };
  helper(root); // 启动递归
  return res;
};