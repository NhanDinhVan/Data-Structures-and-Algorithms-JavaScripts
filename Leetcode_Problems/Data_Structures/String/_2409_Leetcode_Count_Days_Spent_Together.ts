function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
): number {
  function parseDayMonth(str: string): Date {
    return new Date(`2025-${str}`);
  }

  const start = new Date(
    Math.max(
      parseDayMonth(arriveAlice).getTime(),
      parseDayMonth(arriveBob).getTime()
    )
  );

  const end = new Date(
    Math.min(
      parseDayMonth(leaveAlice).getTime(),
      parseDayMonth(leaveBob).getTime()
    )
  );

  const perDay = 1000 * 60 * 60 * 24;

  if (end < start) return 0;

  return Math.floor((end.getTime() - start.getTime()) / perDay) + 1;
}
