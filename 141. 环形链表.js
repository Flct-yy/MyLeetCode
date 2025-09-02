/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 创建map存储遍历过的节点，如果遍历到已经遍历过的节点，则说明有环
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 创建map存储遍历过的节点
  const map = new Map();
  let current = head;
  while (current) {
    // 如果遍历到已经遍历过的节点，则说明有环
    if (map.has(current)) {
      return true;
    } else {
      // 存储当前节点
      map.set(current, true);
      current = current.next;
    }
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针法，如果有环，则快指针会追上慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 初始化快慢指针
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    // 慢指针走一步, 快指针走两步
    slow = slow.next;
    fast = fast.next.next;
    // 如果两个指针相等，说明有环
    // 放在里面可以防止 fast slow 为空 或 为 头节点 的情况
    if (slow === fast) {
      return true;
    }
  }
  return false;
};