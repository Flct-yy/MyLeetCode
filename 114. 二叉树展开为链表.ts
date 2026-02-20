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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten_1(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  const stack: TreeNode[] = [];
  // 先序遍历（递归/栈）
  preOrder_1(root, stack);
  for (let i = 1; i < stack.length; i++) {
    const prev = stack[i - 1];
    const curr = stack[i];
    prev.left = null;
    prev.right = curr;
  }
}

// 先序遍历（递归）
const preOrder_1 = (root: TreeNode | null, list: TreeNode[]): void => {
  if (root != null) {
    list.push(root);
    preOrder_1(root.left, list);
    preOrder_1(root.right, list);
  }
}

// 先序遍历（栈）
const preOrder_2 = (root: TreeNode | null, list: TreeNode[]): void => {
  if (!root) {
    return;
  }
  const stack = [root];
  while (stack.length) {
    const node: TreeNode | undefined = stack.pop();
    if (!node) continue;
    list.push(node);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

// 边遍历边展开
function flatten_2(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  const stack: TreeNode[] = [root];
  let prev: TreeNode | null = null;
  while (stack.length) {
    const curr: TreeNode | undefined = stack.pop();
    if (!curr) {
      continue;
    }

    if (prev !== null) {
      prev.left = null;
      prev.right = curr;
    }
    
    prev = curr;
    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
  }
}