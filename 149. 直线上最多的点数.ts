function maxPoints(points: number[][]): number {
  const n = points.length;
  if (n <= 2) return n;
  let res = 0;

  const gcd = (a: number, b: number): number => {
    return b != 0 ? gcd(b, a % b) : a;
  }

  for (let i = 0; i < n; i++) {
    if (res >= n - i || res > n / 2) {
      break;
    }
    const map = new Map();

    for (let j = i + 1; j < n; j++) {
      let dx = points[i][0] - points[j][0];
      let dy = points[i][1] - points[j][1];

      if (dx === 0) {
        dy = 1;
      } else if (dy === 0) {
        dx = 1;
      } else {
        if (dy < 0) {
          dx = -dx;
          dy = -dy;
        }
        const gcdXY = gcd(Math.abs(dx), Math.abs(dy));
        dx /= gcdXY;
        dy /= gcdXY;
      }

      // 把二维变成一维，且不重叠
      const key = dy + dx * 20001;
      map.set(key, (map.get(key) || 0) + 1);
    }

    let maxn = 0;
    for (const num of map.values()) {
      maxn = Math.max(maxn, num + 1);
    }
    res = Math.max(res, maxn);
  }
  return res;
};