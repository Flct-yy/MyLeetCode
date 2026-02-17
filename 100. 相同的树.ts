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

function isSameTree_1(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree_1(p.left, q.left) && isSameTree_1(p.right, q.right);
};

function isSameTree_2(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  let stack = [];
  stack.push(p);
  stack.push(q);
  while (stack.length > 0) {
    let p: TreeNode | null = stack.pop() ?? null;
    let q: TreeNode | null = stack.pop() ?? null;
    if (p === null && q === null) {
      continue;
    }
    if (p === null || q === null) {
      return false;
    }
    if (p?.val !== q?.val) {
      return false;
    }
    stack.push(p.left);
    stack.push(q.left);
    stack.push(p.right);
    stack.push(q.right);
  }
  return true;
}