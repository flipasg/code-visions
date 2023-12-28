import { optimizeIntervals, Intervals } from './index';
import { describe, test, expect } from 'vitest';

describe('optimizeIntervals', () => {
  test('should return the same intervals if there is only one', () => {
    const intervals: Intervals = [[1, 2]];
    expect(optimizeIntervals(intervals)).toEqual(intervals);
  });

  test('should return the same input if overlap not exist', () => {
    const intervals: Intervals = [
      [1, 2],
      [3, 4],
    ];
    expect(optimizeIntervals(intervals)).toEqual(intervals);
  });

  test('should return merged intervals if overlap exist (one interval is contained in other', () => {
    const intervals: Intervals = [
      [5, 8],
      [2, 7],
      [3, 4]
    ];
    expect(optimizeIntervals(intervals)).toEqual([[2, 8]]);
  });

  test('should return merged intervals if overlap exist', () => {
    const intervals: Intervals = [
      [1, 3],
      [8, 10],
      [2, 6]
    ];
    expect(optimizeIntervals(intervals)).toEqual([[1, 6], [8, 10]]);
  });

  test('should return ordered intervals if overlap not exist', () => {
    const intervals: Intervals = [
      [3, 4],
      [1, 2],
      [5, 6]
    ];
    expect(optimizeIntervals(intervals)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
});
