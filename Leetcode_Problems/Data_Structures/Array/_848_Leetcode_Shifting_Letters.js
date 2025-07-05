function shiftingLetters(s: string, shifts: number[]): string {
  const n = s.length;
  const result: string[] = new Array(n);

  for (let i = n - 2; i >= 0; i--) {
    shifts[i] = (shifts[i] + shifts[i + 1]) % 26;
  }

  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i) - 97; // 'a' -> 0
    const shifted = (code + shifts[i]) % 26;
    result[i] = String.fromCharCode(shifted + 97);
  }

  return result.join("");
}
