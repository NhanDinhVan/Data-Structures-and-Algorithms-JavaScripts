function plusOne(digits: number[]): number[] {
  const num = BigInt(digits.join("")) + 1n;
  return num.toString().split("").map(Number);
}
