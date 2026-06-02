function judgeCircle(moves: string): boolean {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      y += 1;
    } else if (moves[i] === "D") {
      y -= 1;
    } else if (moves[i] === "L") {
      x -= 1;
    } else {
      x += 1;
    }
  }
  return x === 0 && y === 0;
}
