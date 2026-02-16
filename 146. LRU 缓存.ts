class CacheItem {
  key: number;
  value: number;
  prev: CacheItem | null;
  next: CacheItem | null;
  constructor(key: number, value: number, prev: CacheItem | null, next: CacheItem | null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  capacity: number = 0;
  cache: Map<number, CacheItem> = new Map();
  head: CacheItem | null = null;
  tail: CacheItem | null = null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = null;
  }

  // 私有方法：将指定节点移到链表头部
  private moveToHead(item: CacheItem): void {
    // 如果已经是头节点，无需操作
    if (item === this.head) {
      return;
    }

    // 1. 先将该节点从原位置移除
    if (item.prev) {
      item.prev.next = item.next;
    }
    if (item.next) {
      item.next.prev = item.prev;
    }

    // 2. 如果该节点是尾节点，更新尾指针
    if (item === this.tail) {
      this.tail = item.prev;
    }

    // 3. 将该节点插入到头部
    item.prev = null;
    item.next = this.head;
    if (this.head) {
      this.head.prev = item;
    }
    this.head = item;

    // 边界：如果链表只有一个节点，tail指向自己
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const item = this.cache.get(key)!;
      // 将访问的节点移到头部
      this.moveToHead(item);
      return item.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    // 情况1：key已存在，更新value并移到头部
    if (this.cache.has(key)) {
      const item = this.cache.get(key)!;
      item.value = value;
      this.moveToHead(item);
      return;
    }

    // 情况2：key不存在，创建新节点
    const newItem = new CacheItem(key, value, null, null);
    this.cache.set(key, newItem);

    // 2.1 将新节点插入到头部
    if (this.head) {
      newItem.next = this.head;
      this.head.prev = newItem;
      this.head = newItem;
    } else {
      // 链表为空时，头尾都指向新节点
      this.head = newItem;
      this.tail = newItem;
    }

    // 2.2 检查容量，超出则删除尾节点
    if (this.cache.size > this.capacity) {
      const tailItem = this.tail!;
      // 从缓存中删除尾节点
      this.cache.delete(tailItem.key);

      // 更新尾指针
      this.tail = tailItem.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        // 边界：删除后链表为空（容量1时）
        this.head = null;
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */