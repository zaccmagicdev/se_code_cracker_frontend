export const setColor = (color) => {
    return {
        type: 'set_color',
        payload: color
    }
};

export const setSlot = (col) => {
    return {
        type: 'set_slot',
        payload: col
    }
};

export const checkAnswer = (results) => {
    return {
        type: 'check_answer',
        payload: results
    }
};


export const changeGameState = (gameState) => {
    return {
        type: 'set_game_state',
        payload: gameState
    }
}