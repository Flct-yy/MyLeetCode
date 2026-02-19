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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map<number, number>();
  inorder.forEach((val, index) => {
    map.set(val, index);
  });

  /**
   * 递归构造二叉树
   * @param preorderStart preorderStart: 前序遍历开始索引
   * @param preorderEnd preorderEnd: 前序遍历结束索引
   * @param inorderStart inorderStart: 中序遍历开始索引
   * @param inorderEnd inorderEnd: 中序遍历结束索引
   */
  const helper = (preorderStart: number, preorderEnd: number, inorderStart: number, inorderEnd: number): TreeNode | null => {

    if (preorderStart > preorderEnd|| inorderStart > inorderEnd) {
      return null;
    }

    const rootVal = preorder[preorderStart];
    const root = new TreeNode(rootVal);

    const inorderIndex = map.get(rootVal)!;
    const rightSize = inorderEnd - inorderIndex;

    // 左子树的节点数
    const leftSize = inorderIndex - inorderStart;

    root.left = helper(preorderStart + 1, preorderStart + leftSize, inorderStart, inorderIndex - 1);
    root.right = helper(preorderStart+leftSize+1, preorderEnd, inorderIndex+1, inorderEnd);

    return root;
  }


  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};