import React from "react";
import './Game.css';

import PegPallete from "./PegPalette/PegPallete";
import ColorPicker from "./ColorPicker/ColorPicker";

//peg palette will submit an array that will compare to the key array that's randomly generated, white replies indicate that the color is they are in the code but not the right place, black ones will indicate that they are in the code and in the right place
//each peg place will indicate a color and place it's appropriate;y colored peg depending on what the user clicks

function Game() {
    return (
        <div className="game__game-container">
            <PegPallete />
            <ColorPicker />
        </div>
    );
}

export default Game;