Summary
=======

This kata will help you to practise the “driving” part of Test Driven Development. By moving in small steps and reverting back when you make a bad decision, you are able to move forward more confidently, knowing that your previous tests make it easy to recover from a mistake. Small steps mean fast feedback, so it will be easy to identify where you went wrong, and you will be more comfortable experimenting with your approach.

Instructions
============

Write a program to score a game of Ten-Pin Bowling.

You should create a class or module that exposes two methods or functions:

    void roll(int pins)

Ten-Pin Bowling Rules
=====================

A game of bowling is made up of ten "frames", in each frame a player has two rolls of a ball to try to knock down all 10 pins. 

The number of pins knocked down in a frame is the score for that frame, and the game score is the total of the scores from each frame.

If a player knocks down all 10 pins with two rolls, this is a "spare". The score from their next roll is added to the 10 points for the spare.

If a player knocks down all 10 pins with one roll, this is a "strike". Their frame is over, and the score from their next two rolls is added to the 10 points for the strike.

If a player scores a strike or a spare in the final (10th) frame, then they can roll the additional balls required to finish calculating the score for the strike or spare.

To see the scoring system in action, you can use this app: [http://www.bowlinggenius.com/](http://www.bowlinggenius.com/)

### Example Games

\[9, 0\] \[9, 0\] \[9, 0\] \[9, 0\] \[9, 0\] \[9, 0\] \[9, 0\] \[9, 0\] \[9, 0\] = 90

\[10\] \[7, 3\] \[9, 0\] \[10\] \[0, 8\] \[8, 2\] \[0, 6\] \[10\] \[10\] \[10\], \[8, 1\] = 167

\[10\] \[10\] \[10\] \[10\] \[10\] \[10\] \[10\] \[10\] \[10\] \[10, 10, 10\] = 300

A perfect game - strikes in every frame, plus the two balls required to finish calculating the score for the final frame. 10 frames, each scoring 30 points.

\[5, 5\] \[5, 5\] \[5, 5\] \[5, 5\] \[5, 5\] \[5, 5\] \[5, 5\] \[5, 5\] \[5, 5, 5\] = 150  

Five pins hit with every roll (making each frame a spare), plus the extra ball required to finish calculating the score for the final frame, which also hits five pins. 10 frames, each scoring 15 points.

Extra Credit - The Outside-In Approach
======================================

If you'd like an extra challenge, or just to practise Outside-In TDD, then consider trying the exercise with some adjusted constraints:

Do not expose the `void roll(int pins)` and `int score()` methods described in the instructions above. Instead, your class/module should expose only a single public method:

`int score(string game)`

The input to this function should be a string describing a bowling game, in the following format:

`"X|7/|9-|X|-8|8/|-6|X|X|X||81"`

    1-9 : Number of pins hit

Here, you can begin with an expected input and output, but the next test you need to write is not always so obvious. It is advised you try this additional exercise only once you are comfortable with the basic skills of classical TDD such as moving in baby steps and employing the red-green-refactor cycle, and you may want to look at using the Outside-In style of TDD to guide you.

If you need to hone these skills, try the FizzBuzz kata or Leap Year kata. The Roman Numerals kata may also be useful, as the obvious progression of test cases helps teach you to evolve an algorithm in small steps.

Credit: Robert C. Martin, and [Kata-Log](http://kata-log.rocks/bowling-game-kata)

Useful Links
------------

*   [Bowling Genius](http://www.bowlinggenius.com/)
