import "./GameLossModal.css";
import React from "react";
import Modal from "../Modal/Modal";
import Circle from "../Game/Circle/Circle";
import { useGameContext } from "../../contexts/GameContext";

function GameLossModal() {
  const [gameState, dispatch] = useGameContext();

  console.log(gameState);

  return (
    <Modal modalTitle="You lost!" modalName="gamelostmodal">
     
        <p>The correct answer was:</p>
        <div className="gamelostmodal__answer">
          {gameState.answer.map((color, i) => {
            return <Circle key={i} color={color} size={40} />;
          })}
        </div>
        <p>Your score: {gameState.playerScore}</p>
        <button className="gamelostmodal__reset-button"
          onClick={() => {
            //a temporary way to restart the game until I come up with a 
            //system that won't reset the page
            window.location.reload();
          }}
        >
          Try Again?
        </button>
      
    </Modal>
  );
}

export default GameLossModal;
