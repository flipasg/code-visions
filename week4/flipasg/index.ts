export class Bowling {
  frames: number[][] = [];

  roll(pins: number) {
    let currentFrameIndex =
      this.frames.length === 0 ? 0 : this.frames.length - 1;
    if (
      this.frames.length < 10 &&
      this.frames[currentFrameIndex]?.length === 2
    ) {
      currentFrameIndex++;
    }
    if (this.frames[currentFrameIndex] === undefined) {
      this.frames[currentFrameIndex] = [];
    }
    const isBrokenStreak =
      this.frames[currentFrameIndex].length === 1 &&
      this.frames[currentFrameIndex][0] === 0;
    this.frames[currentFrameIndex].push(pins);

    if (!isBrokenStreak && currentFrameIndex >= 1) {
        const previousFrameIndex = currentFrameIndex - 1;
        const previousFrameSum = this.frames[previousFrameIndex].reduce(
          (acc, curr) => acc + curr,
          0
        );
        if (previousFrameSum === 10 || this.frames[previousFrameIndex].includes(10)) {
          this.frames[previousFrameIndex].push(pins);
        }
      
    }
  }

  score(): number {
    return this.frames.flat().reduce((acc, curr) => acc + curr, 0);
  }
}
