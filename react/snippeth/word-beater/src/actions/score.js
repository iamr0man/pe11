import { UPDATE_SCORE, FINISH_GAME } from "./types";

//Check status
export const checkStatus = (time) => dispatch => {

    if (time === 0) {
        dispatch({
            type: FINISH_GAME
        })
    }
}

//Change level
export const changeScore = (point) => dispatch => {
    dispatch({
        type: UPDATE_SCORE,
        payload: point
    })
}