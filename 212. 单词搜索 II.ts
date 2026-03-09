class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
  word: string;
  constructor() {
    this.children = new Map();
    this.isEnd = false;
    this.word = '';
  }

}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    if (!word) {
      return
    }
    let node: TrieNode = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isEnd = true;
    node.word = word;
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const result = new Set<string>();
  if (board.length === 0 && board[0].length === 0 && words.length === 0) {
    return Array.from(result);
  }

  const rows = board.length;
  const cols = board[0].length;
  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const dfs = (row: number, col: number, node: TrieNode) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || !board[row][col] || board[row][col] === '#' || !node.children.has(board[row][col])) {
      return
    }

    const currChar = board[row][col];
    const currNode = node.children.get(currChar)!;

    if (currNode.isEnd && currNode.word) {
      result.add(currNode.word);
    }

    board[row][col] = '#';

    for (const [dx, dy] of dir) {
      dfs(row + dx, col + dy, currNode);
    }

    board[row][col] = currChar;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dfs(i, j, trie.root);
    }
  }

  return Array.from(result);
};

