export class Bowling {
  pins = 0;

  constructor() {}

  roll(pins: number) {
    this.pins += pins;
  }

  score(): number {
    return this.pins;
  }
}
