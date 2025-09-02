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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 创建map存储遍历过的节点
  const map = new Map();
  let current = head;
  while (current) {
    // 如果遍历到已经遍历过的节点，则说明有环
    if (map.has(current)) {
      // 返回环的入口节点
      return current;
    } else {
      // 存储当前节点
      map.set(current, true);
      current = current.next;
    }
  }
  return null;
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
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
      // 找到环的入口节点
      // p1 从 head 开始，p2 从 相遇点 开始，每次各走一步，最终会在环入口相遇

      /**
       * 设 环的入口节点距头节点的距离为 k  环的长度为 n 相遇点距环的入口节点的距离为 m
       * slow 走过的距离为 m + k  fast 走过的距离为 m + k + N*n N为圈数
       * 2(m + k) = m + k + N*n
       * k = (N-1)*n + (n- m)
       * 两个指针在入口节点相遇
       */
      let p1 = head;
      let p2 = slow;
      // 两个指针同时往前走，直到相遇
      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      return p1;
    }
  }
  return null;
};