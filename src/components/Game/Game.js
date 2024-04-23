import React, { useEffect, useReducer } from "react";
import "./Game.css";
import { MAX_ATTEMPTS, startingState } from "../../constants/constants";
import PegPallete from "./PegPalette/PegPalette";
import Colors from "./Colors/Colors";
import GameContext from "../../contexts/GameContext";
import reducer from "../../utils/reducer";
import { changeGameState } from "../../utils/reducerFunctions";
import GameLossModal from "../GameLossModal/GameLossModal";
import GameWonModal from "../GameWonModal/GameWonModal";

function Game() {
  const [gameState, dispatch] = useReducer(reducer, startingState());
 
  //passing a variable as props that will change depending on if the user is on mobile or not..
  let pegSize, hintSize;

  //578 is the width where pegs would start to look whack
     if(window.screen.width < 578){
        pegSize = 20;
        hintSize = 10;
     } else {
        pegSize = 40;
        hintSize = 20;
     }

  //if user runs out of attempts they lose
  useEffect(() => {
    if (gameState.currentAttempt === MAX_ATTEMPTS) {
      dispatch(changeGameState("gamelost"));
    }
  }, [gameState.currentAttempt]);

  //if all slots in an attempt are black the user has won
  useEffect(() => {
    //error handling so we can check the previous value without having the application
    if (gameState.results[gameState.currentAttempt - 1] !== undefined) {
      if (
        gameState.results[gameState.currentAttempt - 1].every(
          (val, i, arr) => val === arr[0] && arr[0] === "black"
        )
      ) {
        dispatch(changeGameState("gamewon"));
      }
    }
  }, [gameState.currentAttempt]);

  return (
    <section className="game__game-container">
      <GameContext.Provider value={[gameState, dispatch]}>
        <PegPallete hintSize={hintSize} pegSize={pegSize}/>
        <Colors pegSize={pegSize}/>
        {gameState.currentGameState === "gamelost" && <GameLossModal/>}
        {gameState.currentGameState === "gamewon" && <GameWonModal/>}
      </GameContext.Provider>
    </section>
  );
}

export default Game;
