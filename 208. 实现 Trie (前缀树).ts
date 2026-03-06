class Trie {
  private children: Record<string, Trie>;
  private isEnd: boolean;
  constructor() {
    this.children = {};
    this.isEnd = false;
  }

  insert(word: string): void {
    let node: Trie = this;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new Trie();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  searchPrefix(prefix: string): Trie | undefined {
    let node: Trie = this;
    for (const ch of prefix) {
      if (!node.children[ch]) {
        return undefined;
      }
      node = node.children[ch];
    }
    return node;

  }

  search(word: string): boolean {
    const node = this.searchPrefix(word);
    return node !== undefined && node.isEnd === true;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) !== undefined;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */