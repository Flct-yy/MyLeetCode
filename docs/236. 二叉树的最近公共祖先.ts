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

function lowestCommonAncestor_1(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let result: TreeNode | null = null;
  const dfs = (node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!node) {
      return false;
    }
    // 判断左子树和右子树是否包含p和q
    const lson = dfs(node.left, p, q);
    const rson = dfs(node.right, p, q);
    if ((lson && rson) || ((node.val === p?.val || node.val === q?.val) && (lson || rson))) {
      // 左右子树都包含p和q，或者当前节点是p或q
      // 只有当前node是公共祖先，才更新result
      // 因为是递归，所以最后一次更新result是最近的公共祖先
      result = node;
    }
    return lson || rson || (node.val === p?.val || node.val === q?.val);
  }
  dfs(root, p, q);
  return result;
};

function lowestCommonAncestor_2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || !p || !q) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }

  const path: TreeNode[] = [];
  const visited: Set<TreeNode> = new Set();
  let tempPath: TreeNode[] = [];
  let curr: TreeNode | null | undefined = root;
  while (curr) {
    path.push(curr);
    curr = curr.left;
  }
  let foundCount = 0;
  let result: TreeNode | null = null;
  while (path.length) {
    curr = path[path.length - 1];
    if (!curr) {
      path.pop();
      continue;
    }
    if (!visited.has(curr)) {
      // 标记为已访问（先标记，再处理）
      visited.add(curr);

      if (curr?.val === p?.val || curr?.val === q?.val) {
        foundCount++;
        if (foundCount === 1) {
          tempPath = [...path];
        } else if (foundCount === 2) {
          let i = 0;
          while (i < tempPath.length && i < path.length && tempPath[i].val === path[i].val) {
            i++;
          }
          result = i > 0 ? tempPath[i - 1] : root;
          break;
        }
      }

      let right: TreeNode | null = curr.right;
      // 把右子树的左节点全部入栈（保持你的逻辑，但避免重复）
      while (right && !visited.has(right)) {
        path.push(right);
        right = right.left;
      }
    } else {
      path.pop();
    }
  }
  return foundCount === 2 ? result : null;
};