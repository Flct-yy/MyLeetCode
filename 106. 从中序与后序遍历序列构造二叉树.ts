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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const map = new Map<number, number>();
  inorder.forEach((val, index) => {
    map.set(val, index);
  });

  const helper = (inorderStart: number, inorderEnd: number, postorderStart: number, postorderEnd: number): TreeNode | null => {
    if (inorderStart > inorderEnd || postorderStart > postorderEnd) {
      return null;
    }

    const rootVal = postorder[postorderEnd];
    const root = new TreeNode(rootVal);
    const rootIndex = map.get(rootVal)!;

    const leftSize = rootIndex - inorderStart;

    root.left = helper(inorderStart, rootIndex - 1, postorderStart, postorderStart + leftSize - 1);
    root.right = helper(rootIndex + 1, inorderEnd, postorderStart + leftSize, postorderEnd - 1);

    return root;
  }
  return helper(0, inorder.length - 1, 0, postorder.length - 1);
};