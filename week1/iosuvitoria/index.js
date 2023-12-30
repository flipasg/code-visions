function optimizeIntervals(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    const optimizedIntervals = [intervals[0]];
  
    intervals.slice(1).forEach(interval => {
      const lastOptimizedInterval = optimizedIntervals[optimizedIntervals.length - 1];
      if (interval[0] <= lastOptimizedInterval[1]) {
        lastOptimizedInterval[1] = Math.max(lastOptimizedInterval[1], interval[1]);
      } else {
        optimizedIntervals.push(interval);
      }
    });
  
    return optimizedIntervals;
}
