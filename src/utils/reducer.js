// we can use this to set up the actions we will actually need
//an action for setting colors
//an action for game states

import processCurrentAttempt from "../components/Game/processCurrentAttempt";

export default function reducer(state, action) {
  switch (action.type) {
    case "set_color":
      return {
        ...state,
        currentColor: action.payload,
      };
    case "set_slot":
      const curRow = [...state.attempts[state.currentAttempt]];
      curRow[action.payload] = state.currentColor;
      state.attempts[state.currentAttempt] = [...curRow];

      return {
        ...state,
      };

    case "check_answer":
      let { currentAttempt, results, answer, attempts } = state;

      let pegPoints = 0;

      //user cannot leave empty pegs
      if (attempts[currentAttempt].includes("")) {
        alert("You must fill in all pegs to submit an answer");
        return {
          ...state,
        };
      } else {
        results[currentAttempt] = processCurrentAttempt(
          attempts[currentAttempt],
          answer
        );

        //accumulates peg values, for each black peg add 1 and for each white peg add 2 and an empty guess will add 3
        for (let i = 0; i < results[currentAttempt].length; i++) {
          if (results[currentAttempt][i] === "black") {
            pegPoints = pegPoints + 1;
          } else if (results[currentAttempt][i] === "white") {
            pegPoints = pegPoints + 2;
          } else {
            pegPoints = pegPoints + 3;
          }
        }

        return {
          ...state,
          currentAttempt: state.currentAttempt + 1,
          playerScore: state.playerScore + (30 + pegPoints),
          results,
        };
      }

    case "set_game_state":
      state.currentGameState = action.payload;

      return {
        ...state,
      };

    default:
      throw new Error(
        "An unexpected error occured, please check the log for more details"
      );
  }
}
