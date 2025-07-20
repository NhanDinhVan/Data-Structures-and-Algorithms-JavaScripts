function furthestDistanceFromOrigin(moves: string): number {
  let l = 0;
  let r = 0;
  let x = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "L") {
      l++;
    } else if (moves[i] === "R") {
      r++;
    } else {
      x++;
    }
  }
  if (l === r) return x;
  return l > r ? l - r + x : r - l + x;
}
