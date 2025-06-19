function isLongPressedName(name: string, typed: string): boolean {
  let i = 0;
  let j = 0;
  let len1 = name.length;
  let len2 = typed.length;

  while (i < len1 && j < len2) {
    if (name[i] === typed[j]) {
      j++;
      i++;
      continue;
    }
    if (j > 0 && typed[j] == typed[j - 1]) {
      j++;
      continue;
    }
    return false;
  }
  while (j < len2) {
    if (typed[j] !== typed[j - 1]) return false;
    j++;
  }

  return i == len1;
}
