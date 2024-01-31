import { describe, expect, test } from 'vitest';
import { Bowling } from '.';

describe('Bowling', () => {
  test('should score 1 with a roll of 1 pin', () =>{
    const bowling = new Bowling();

    bowling.roll(1);

    expect(bowling.score()).toBe(1);
  });

  test('should score 2 with a roll of 2 pins', () =>{
    const bowling = new Bowling();

    bowling.roll(2);

    expect(bowling.score()).toBe(2);
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

  test('should score 20 rolling a spare (five and five pins) and then five pins', () =>{
    const bowling = new Bowling();

    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);

    expect(bowling.score()).toBe(20)
  });

  test('should score 24 rolling a spare (three and seven pins) and then seven pins', () =>{
    const bowling = new Bowling();

    bowling.roll(3);
    bowling.roll(7);
    bowling.roll(7);

    expect(bowling.score()).toBe(24)
  });

  test('should score 35 rolling two spares (five and five pins) and then five pins', () =>{
    const bowling = new Bowling();

    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);

    expect(bowling.score()).toBe(35)
  });

  test('should score 150 rolling rolling with 5 pins all the frames', () =>{
    const bowling = new Bowling();

    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);

    expect(bowling.score()).toBe(150)
  });


  test('should score 117 game', () =>{
    const bowling = new Bowling();


    bowling.roll(5);
    bowling.roll(5);

    bowling.roll(6);
    bowling.roll(0);

    bowling.roll(5);
    bowling.roll(5);

    bowling.roll(7);
    bowling.roll(0);

    bowling.roll(9);
    bowling.roll(0);

    bowling.roll(5);
    bowling.roll(5);
    
    bowling.roll(7);
    bowling.roll(3);

    bowling.roll(0);
    bowling.roll(5);

    bowling.roll(5);
    bowling.roll(5);

    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);


    expect(bowling.score()).toBe(117)
  });

  
  test('should score 28 game with strike in the second roll of a frame', () =>{
    const bowling = new Bowling();


    bowling.roll(0);
    bowling.roll(10);

    bowling.roll(7);
    bowling.roll(2);

    expect(bowling.score()).toBe(28);
  });
  
})