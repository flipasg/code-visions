export class Bowling {
  frames: number[][] = [];
  currentFrameIndex: number = 0;
  MAX_ROLLS_PER_FRAME: number = 2;
  MAX_PINS: number = 10;
  MAX_FRAMES: number = 10;

  roll(pins: number) {
    this.frames[this.currentFrameIndex] = [
      ...(this.frames[this.currentFrameIndex] ?? []),
      pins,
    ];

    if (
      this.currentFrameIndex < this.MAX_FRAMES - 1 &&
      (pins === this.MAX_PINS || this.frames[this.currentFrameIndex]?.length === this.MAX_ROLLS_PER_FRAME)
    ) {
      this.currentFrameIndex++;
    }
  }

  score(): number {
    return this.frames.reduce((acc, curr, currentIndex, frames) => {
      const frameSum = curr.reduce((acc, curr) => acc + curr, 0);

      const isStrike = curr.includes(this.MAX_PINS);
      const isSpare = frameSum === this.MAX_PINS;

      const spareAccumulator = isSpare ? 1 : 0;
      const accumulators = isStrike ? 2 : spareAccumulator;

      const restRolls = frames
        .slice(currentIndex + 1)
        .flat()
        .slice(0, accumulators);

      const totalSum = frameSum + restRolls.reduce((acc, curr) => acc + curr, 0);

      return acc + totalSum;
    }, 0);
  }
}
