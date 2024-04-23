import "./GameWonModal.css";
import React from "react";
import Modal from "../Modal/Modal";
import Circle from "../Game/Circle/Circle";
import { useGameContext } from "../../contexts/GameContext";
import { changeGameState } from "../../utils/reducerFunctions";

function GameWonModal() {
  const [gameState, dispatch] = useGameContext();

  return (
    <Modal modalTitle="YOU WON!" modalName="gamewonmodal">
     
        <p>Well done!</p>
        <div className="gamewonmodal__answer">
          {gameState.answer.map((color, i) => {
            return <Circle key={i} color={color} size={40} />;
          })}
        </div>
        <p>Your score: {gameState.playerScore}</p>
        <button className="gamewonmodal__reset-button"
          onClick={() => {
            //a temporary way to restart the game until I come up with a 
            //system that won't reset the page
            window.location.reload();
          }}
        >
          Play Again!
        </button>
      
    </Modal>
  );
}

export default GameWonModal;
