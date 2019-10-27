import { UPDATE_SCORE, FINISH_GAME } from "./types";
import { clearInterval } from "timers";

//Check status
export const checkStatus = (time) => dispatch => {
    const game = setInterval(() => {
        let e = time--
        if (e === 0) {
            dispatch({
                type: FINISH_GAME
            })

        }
    }, 1000)

}

//Change level
export const changeScore = (point) => dispatch => {
    dispatch({
        type: UPDATE_SCORE,
        payload: point
    })
}