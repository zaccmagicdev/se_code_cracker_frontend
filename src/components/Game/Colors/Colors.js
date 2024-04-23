import React, { useState } from "react";
import "./Colors.css";
import { COLORS } from "../../../constants/constants";
import Circle from "../Circle/Circle";
import { useGameContext } from "../../../contexts/GameContext";
import { setColor } from "../../../utils/reducerFunctions";

function Colors(props) {
  const [gameState, dispatch] = useGameContext();


  return (
    <div className="colors">
      {COLORS.map((color, i) => {
        return (
          <Circle
            className={gameState.currentColor === color && 'circle_active'}
            color={color}
            size={props.pegSize}
            key={i}
            onClick={() => {
              dispatch(setColor(color));
            }}
          />
        );
      })}
    </div>
  );
}

export default Colors;
