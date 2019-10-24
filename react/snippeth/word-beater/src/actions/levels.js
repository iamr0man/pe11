import { CHANGE_LEVEL, PROGRESS_GAME, FINISH_GAME } from "./types";


export const startGame = () => dispatch => {
    setInterval(() =>
        dispatch({
            type: PROGRESS_GAME
        }), 1000)
}

//Change level
export const changeLevel = level => dispatch => {
    dispatch({
        type: CHANGE_LEVEL,
        payload: level
    })
}