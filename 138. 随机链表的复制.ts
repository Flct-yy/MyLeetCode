/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

class _Node {
  val: number
  next: _Node | null
  random: _Node | null

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

function copyRandomList_1(head: _Node | null): _Node | null {
  if (!head) {
    return null
  }
  const map = new Map()
  let curr: _Node | null = head
  while (curr) {
    map.set(curr, new _Node(curr.val))
    curr = curr.next
  }
  const dummy = new _Node()
  curr = head
  let prev = dummy
  while (curr) {
    const node = map.get(curr)
    prev.next = node;
    if (curr.random) {
      node.random = map.get(curr.random)
    }
    prev = node;
    curr = curr.next;
  }
  return dummy.next;
};

function copyRandomList_2(head: _Node | null): _Node | null {
  if (!head) {
    return null;
  }

  let curr: _Node | null = head;
  while (curr) {
    const newNode = new _Node(curr.val);
    const nextNode: _Node | null = curr.next;
    curr.next = newNode;
    newNode.next = nextNode;
    curr = nextNode;
  }

  curr = head;
  while (curr) {
    const newNode: _Node | null = curr.next;
    if (newNode) {
      if (curr.random) {
        newNode.random = curr.random.next;
      } else {
        newNode.random = null;
      }
      curr = newNode.next;
    }
  }

  curr = head;
  const copyHead = head.next;
  while (curr) {
    const newNode: _Node | null = curr.next;
    if (newNode) {
      const nextOldNode: _Node | null = newNode.next;
      curr.next = nextOldNode;
      if (nextOldNode) {
        newNode.next = nextOldNode.next;
      } else {
        newNode.next = null;
      }
      curr = nextOldNode
    }
  }

  return copyHead
};