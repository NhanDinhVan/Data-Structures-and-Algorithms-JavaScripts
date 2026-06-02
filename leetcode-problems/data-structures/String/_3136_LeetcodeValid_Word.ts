function isValid(word: string): boolean {
  if (word.length < 3) return false;
  function isChar(c: string) {
    return /^[a-zA-Z]$/.test(c);
  }
  function isDigit(c: string) {
    return /^[0-9]$/.test(c);
  }
  let arr = ["a", "e", "o", "i", "u"];
  let v = false; // has vowel
  let c = false; // has consonant

  for (let i = 0; i < word.length; i++) {
    if (isChar(word[i])) {
      const char = word[i].toLowerCase();
      if (arr.includes(char)) {
        v = true;
      } else {
        c = true;
      }
    } else if (!isDigit(word[i])) {
      return false;
    }
  }

  return c && v;
}
