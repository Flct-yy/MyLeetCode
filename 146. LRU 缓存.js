/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  // 双向链表的头节点和尾节点（哨兵节点，简化边界处理）
  this.head = new Node();
  this.tail = new Node();
  // 连接头节点和尾节点
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const node = this.map.get(key);
  // 移除节点
  this.removeNode(node);
  // 插入到头节点之前
  this.insertBeforeHead(node);
  return node.value;
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.value = value;
    // 移除节点
    this.removeNode(node);
    // 插入到头节点之前
    this.insertBeforeHead(node);
  } else {
    const node = new Node(key, value);
    // 插入到头节点之前
    this.insertBeforeHead(node);
    this.map.set(key, node);
    // 缓存已满，删除尾节点
    if (this.map.size > this.capacity) {
      // 删除尾节点
      const tailNode = this.removeTail();
      this.map.delete(tailNode.key);
    }
  }
};

// 从链表中移除节点
LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

// 将节点插入到头节点之前
LRUCache.prototype.insertBeforeHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
}

// 移除尾部节点
LRUCache.prototype.removeTail = function () {
  const tailNode = this.tail.prev;
  this.removeNode(tailNode);
  return tailNode;
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */