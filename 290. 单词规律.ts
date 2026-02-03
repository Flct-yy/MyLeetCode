function wordPattern(pattern: string, s: string): boolean {
  const mapP = new Map<string, string>();
  const mapS = new Map<string, string>();
  const words = s.split(' ');
  if(words.length!== pattern.length){
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    const w = words[i];
    if ((mapP.has(c) && mapP.get(c) !== w) || (mapS.has(w) && mapS.get(w) !== c)) {
      return false;
    }
    mapP.set(c, w);
    mapS.set(w, c);
  }
  return true;
};