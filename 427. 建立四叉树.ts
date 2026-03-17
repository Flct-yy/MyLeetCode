/**
 * Definition for _Node.
 * class _Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: _Node | null
 * 	topRight: _Node | null
 * 	bottomLeft: _Node | null
 * 	bottomRight: _Node | null
 * 	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *   }
 * }
 */

class _Node {
  val: boolean
  isLeaf: boolean
  topLeft: _Node | null
  topRight: _Node | null
  bottomLeft: _Node | null
  bottomRight: _Node | null
  constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
    this.val = (val === undefined ? false : val)
    this.isLeaf = (isLeaf === undefined ? false : isLeaf)
    this.topLeft = (topLeft === undefined ? null : topLeft)
    this.topRight = (topRight === undefined ? null : topRight)
    this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
    this.bottomRight = (bottomRight === undefined ? null : bottomRight)
  }
}

function construct(grid: number[][]): _Node | null {
  const dfs = (grid: number[][], r0: number, c0: number, r1: number, c1: number) => {
    let same = true;
    for (let i = r0; i < r1; ++i) {
      for (let j = c0; j < c1; ++j) {
        if (grid[i][j] !== grid[r0][c0]) {
          same = false;
          break;
        }
      }
    }

    if (same) {
      return new _Node(grid[r0][c0] === 1, true);
    }

    const midR = Math.floor((r0 + r1) / 2);
    const midC = Math.floor((c0 + c1) / 2);
    const ret:_Node = new _Node(
      true,
      false,
      dfs(grid, r0, c0, midR, midC),
      dfs(grid, r0, midC, midR, c1),
      dfs(grid, midR, c0, r1, midC),
      dfs(grid, midR, midC, r1, c1) 
    );
    return ret;
  }

  return dfs(grid, 0, 0, grid.length, grid.length);
};