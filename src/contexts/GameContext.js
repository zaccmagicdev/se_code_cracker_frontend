import * as React from 'react';

const GameContext = React.createContext();

export function useGameContext(){
    return React.useContext(GameContext);
}

export default GameContext;