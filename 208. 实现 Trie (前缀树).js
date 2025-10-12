var TrieNode = function () {
  this.children = new Array(26).fill(null);
  this.isEnd = false;
}

var Trie = function () {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const char of word) {
    // charCodeAt 用于返回指定位置字符的 Unicode 编码。
    const charIndex = char.charCodeAt('0') - 'a'.charCodeAt('0')

    if (!node.children[charIndex]) {
      node.children[charIndex] = new TrieNode();
    }
    node = node.children[charIndex];
  }
  node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (const char of word) {
    const charIndex = char.charCodeAt('0') - 'a'.charCodeAt('0')

    if (!node.children[charIndex]) {
      return false;
    }
    node = node.children[charIndex];
  }
  return node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (const char of prefix) {
    const charIndex = char.charCodeAt('0') - 'a'.charCodeAt('0')

    if (!node.children[charIndex]) {
      return false;
    }
    node = node.children[charIndex];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */