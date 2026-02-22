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

class BSTIterator {
 
  private stack: TreeNode[] = []

  constructor(root: TreeNode | null) {
    if (root) {
      this.stack.push(root)
      while (root.left) {
        this.stack.push(root.left)
        root = root.left
      }
    }
  }

  next(): number {
    const node = this.stack.pop()
    if (!node) return NaN;
    if (node.right) {
      this.stack.push(node.right)
      let tmp = node.right
      while (tmp.left) {
        this.stack.push(tmp.left)
        tmp = tmp.left
      }
    }
    return node.val
  }

  hasNext(): boolean {
    return this.stack.length > 0
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */