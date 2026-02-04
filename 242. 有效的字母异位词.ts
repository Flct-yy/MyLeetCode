function isAnagram(s: string, t: string): boolean {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }
  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};