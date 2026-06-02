function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let ans = 0;
  let max = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] <= max) {
      ans += timeSeries[i] + duration - max;
    } else {
      ans += duration;
    }
    max = timeSeries[i] + duration;
  }
  return ans;
}
