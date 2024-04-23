import React from 'react'
import './Answer.css'
import { useGameContext } from '../../../contexts/GameContext';
import Circle from '../Circle/Circle';

function Answer(props) {

    const [gameState, dispatch] = useGameContext();

    return (
        <div className='answer'>
            {props.status === 'gamelost' ?
                <div className='answer__revealed'>
                    {gameState.answer.map((color, i) => {
                        return <Circle key={i} color={color} size={40} />
                    })}
                </div>
                :
                <div className='answer__hidden' >Answer Hidden!</div>
                }
        </div>
    )
}

export default Answer