class WordDictionary {
  private children: Record<string, WordDictionary>;
  private isEnd: boolean;
  constructor() {
    this.children = {};
    this.isEnd = false;
  }

  addWord(word: string): void {
    let node: WordDictionary = this;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new WordDictionary();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const dfs = (index: number, node: WordDictionary): boolean => {
      if (index === word.length) {
        return node.isEnd;
      }
      const ch = word[index];
      if (ch !== '.') {
        const child = node.children[ch]
        if (child && dfs(index + 1, child)) {
          return true;
        }
      } else {
        for (const str in node.children) {
          const child = node.children[str]
          if (child && dfs(index + 1, child)) {
            return true;
          }
        }
      }

      return false;
    }
    return dfs(0, this);
  }

}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */