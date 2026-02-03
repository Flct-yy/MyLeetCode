function isIsomorphic(s: string, t: string): boolean {
  const mapS = new Map<string, string>();
  const mapT = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const x = s[i], y = t[i];
    if ((mapS.has(x) && mapS.get(x) !== y) || (mapT.has(y) && mapT.get(y) !== x)) {
      return false;
    }
    mapS.set(x, y);
    mapT.set(y, x);
  }
  return true;
};