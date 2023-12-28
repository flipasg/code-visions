type Interval = [number, number];

export type Intervals = Interval[];

export function optimizeIntervals(intervals: Intervals) {
  if (intervals.length === 1) {
    return intervals;
  }

  intervals.sort(
    ([firstStart], [secondStart]) => firstStart - secondStart
  );

  const mergedIntervals = intervals.reduce(
    (acc, interval) => {
      const lastInterval = acc[acc.length - 1];
      if (lastInterval[1] >= interval[0]) {
        lastInterval[1] = Math.max(lastInterval[1], interval[1]);
        return acc;
      }
      return [...acc, interval];
    },
    [intervals[0]]
  );

  return mergedIntervals;
}