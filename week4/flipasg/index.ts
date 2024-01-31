export class Bowling {
  frames: number[][] = [];
  currentFrameIndex: number = 0;

  roll(pins: number) {
    const isBrokenStreak =
      this.frames[this.currentFrameIndex]?.length === 1 &&
      this.frames[this.currentFrameIndex][0] === 0;

    this.frames[this.currentFrameIndex] = [
      ...(this.frames[this.currentFrameIndex] ?? []),
      pins,
    ];

    if (!isBrokenStreak) {
      const previousFrameIndex = this.currentFrameIndex - 1;
      const previousFrame = this.frames[previousFrameIndex];
      if (previousFrame) {
        const isStrike = previousFrame.includes(10);
        const isSpare = previousFrame.reduce(
          (acc, curr) => acc + curr,
          0
        ) === 10;

        if (isSpare || isStrike) {
          previousFrame.push(pins);
        }
      }
    }

    if (
      pins === 10 ||
      (this.frames.length < 10 &&
        this.frames[this.currentFrameIndex]?.length === 2)
    ) {
      this.currentFrameIndex++;
    }
  }

  score(): number {
    return this.frames.flat().reduce((acc, curr) => acc + curr, 0);
  }
}
