/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 使用Map来存储链表A的所有节点
  const map = new Map();
  let a = headA, b = headB;
  // 遍历链表A，将节点和值存入Map
  while(a){
    map.set(a,a.val);
    a = a.next;
  }
  // 遍历链表B，判断是否存在与链表A相同值的节点
  while(b){
    if(map.has(b)){
      return b;
    }
    b = b.next;
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
 * 可以用两个指针来遍历两个链表, 直到两个指针相遇.
 * 只有两个链表长度相同, 才可能 a === b === null, 才会返回 null.
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB;
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};