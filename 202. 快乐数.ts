function isHappy_1(n: number): boolean {
  const set = new Set<number>();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = n.toString().split('').reduce((acc, cur) => acc + (+cur) ** 2, 0);
  }
  return n === 1;
};

function isHappy_2(n: number): boolean {
  let slow = n;
  let fast = n;
  do {
    slow = slow.toString().split('').reduce((acc, cur) => acc + (+cur) ** 2, 0);
    fast = fast.toString().split('').reduce((acc, cur) => acc + (+cur) ** 2, 0);
    fast = fast.toString().split('').reduce((acc, cur) => acc + (+cur) ** 2, 0);
  } while (slow !== fast);
  return slow === 1;
};