import { describe, expect, test } from 'vitest';
import { Bowling } from '.';

describe('Bowling', () => {
  test('should score 1 with a roll of 1 pin', () =>{
    const bowling = new Bowling();

    bowling.roll(1);

    expect(bowling.score()).toBe(1)
  });


  test('should score 2 with a roll of 2 pins', () =>{
    const bowling = new Bowling();

    bowling.roll(2);

    expect(bowling.score()).toBe(2)
  });

  test('should score 3 with a roll of 3 pins', () =>{
    const bowling = new Bowling();

    bowling.roll(3);

    expect(bowling.score()).toBe(3)
  });

  test('should score 2 rolling one pin two times', () =>{
    const bowling = new Bowling();

    bowling.roll(1);
    bowling.roll(1);

    expect(bowling.score()).toBe(2)
  });

  test('should score 2 rolling one pin two times', () =>{
    const bowling = new Bowling();

    bowling.roll(1);
    bowling.roll(1);

    expect(bowling.score()).toBe(2)
  });


  test('should score 90 rolling nine pins ten times', () =>{
    const bowling = new Bowling();

    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);
    bowling.roll(9);

    expect(bowling.score()).toBe(90)
  });
})