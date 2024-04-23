import React from "react";
import Circle from "../Game/Circle/Circle";
import "./Rules.css";

function Rules() {
  return (
    <section className="rules">
      <h1 className="rules__title">How to play Code Cracker!</h1>
      <p className="rules__text">
        Code Cracker is identical to a logic-based Israeli board game made in the 70 's
        called 'Mastermind' in which the user must crack a random pattern of
        colored pegs in a given number of guesses. In this version of
        Mastermind, you are given several colored pegs to click on to put in the
        slots given. When a user has filled all 5 slots they can submit their
        guess. Colors in the code do not repeat.
      </p>
      <div className="rules__hint-example-container">
        <div className="rules__hint-example">
          <Circle size={20} color={"black"} />
          <p className="rules__text"> - indicates a peg was in the right spot and is in the code</p>
        </div>
        <div className="rules__hint-example">
          <Circle size={20} color={"white"} />
          <p className="rules__text"> - indicates the color is in the code but not in the right spot</p>
        </div>
        <div className="rules__hint-example">
          <Circle size={20} color={"grey"} />
          <p className="rules__text"> - indicates the color chosen is not in the code</p>
        </div>
      </div>
      <p className="rules__text">
        When you click the attempt button, you will see the results where you
        just had your last attempt. You will have eight attempts to crack the
        code or you lose! If you see a white peg, that means the color is in the
        code but not in the right place. If you see a black peg, that means the
        color is in the right spot of the code and that color is in the code. A
        blank hint peg means that the color was not in the code at all. The spots
        for the hints and the slots do not correspond to each other. This game
        also scores you based on how many attempts it's taken you and if you've
        gotten white or black pegs. Each blank peg adds three to your score,
        each white one adds two, and a black one adds only one. Every attempt
        will add 30 to your score. The lower the score, the better!
      </p>
    </section>
  );
}

export default Rules;
