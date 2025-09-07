/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  // 创建map存储旧节点和新节点的映射
  const map = new Map();
  let current = head;

  // 第一次遍历：创建新节点并存储映射
  while (current) {
    map.set(current, new Node(current.val));
    current = current.next;
  }

  // 第二次遍历：设置新节点的 next 和 random 指针
  current = head;
  while (current) {
    const newNode = map.get(current);
    // 设置 next 指针
    if (current.next) {
      newNode.next = map.get(current.next);
    }
    // 设置 random 指针
    if (current.random) {
      newNode.random = map.get(current.random);
    }
    current = current.next;
  }

  return map.get(head);
};


/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  let current = head;

  // 第一次遍历：在每个原节点后插入新节点
  while (current) {
    const newNode = new Node(current.val);
    // 将新节点插入原节点后面
    newNode.next = current.next;
    current.next = newNode;
    current = newNode.next;
  }

  // 第二次遍历：设置新节点的 random 指针
  current = head;
  while (current) {
    if (current.random) {
      // 当前节点的 random 指针指向其 random 节点的下一个节点
      current.next.random = current.random.next;
    }
    // 移动到下一个原节点
    current = current.next.next;
  }

  // 第三次遍历：拆分链表
  current = head;
  const newHead = head === null? null : head.next;
  let newCurrent = newHead;

  while (current) {
    current.next = current.next.next;
    // 如果当前节点的下一个节点存在，则修改 newCurrent 的 next 指针
    if (newCurrent.next) {
      newCurrent.next = newCurrent.next.next;
    }
    // 移动到下一个原节点和新节点
    current = current.next;
    newCurrent = newCurrent.next;
  }

  return newHead;
};