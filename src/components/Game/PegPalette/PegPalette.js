import React from "react";
import './PegPalette.css';
import Circle from "../Circle/Circle";
import { useGameContext } from "../../../contexts/GameContext";
import { setSlot, checkAnswer } from "../../../utils/reducerFunctions";
import { MAX_ATTEMPTS } from "../../../constants/constants";


function PegPallete(props) {
    //render submit button only when the state is active on an active turn
    //there will be a callback in the submit depending on the result of the check that will update the current
    //renderinf pegpallete results could change depending on the currentAttempt state
    const [gameState, dispatch] = useGameContext();
    const { currentAttempt, attempts } = gameState;

    function sendCol(col) {
        dispatch(setSlot(col))
    }

    return (
        <div className="pegpallete">
            {new Array(MAX_ATTEMPTS).fill().map((j, i) =>
                <div className={`pegpallete__container ${i === currentAttempt ? 'pegpallete__container_active' : ''}`} key={i}>
                    <div className={"pegpallete__slots"}>
                        <Circle color={attempts[i][0]} size={props.pegSize} onClick={() => { sendCol(0) }} />
                        <Circle color={attempts[i][1]} size={props.pegSize} onClick={() => { sendCol(1) }} />
                        <Circle color={attempts[i][2]} size={props.pegSize} onClick={() => { sendCol(2) }} />
                        <Circle color={attempts[i][3]} size={props.pegSize} onClick={() => { sendCol(3) }} />
                        <Circle color={attempts[i][4]} size={props.pegSize} onClick={() => { sendCol(4) }} />
                    </div>
                    {i === currentAttempt ?
                        <button className="pegpallete__slot-submit" onClick={() => {dispatch(checkAnswer(gameState.currentAttempt))}}>Attempt</button>
                        :
                        
                        <div className="pegpallete__results">
                            {gameState.results[i].map((hint, i) => {
                                return (<Circle key={i} color={hint} size={props.hintSize}/>)
                            })}
                        </div>
                    }
                </div>
            ).reverse()}
            {}
        </div>
    );
}

export default PegPallete;