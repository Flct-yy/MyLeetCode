function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const char of ransomNote) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char)! - 1);
  }
  return true;
};