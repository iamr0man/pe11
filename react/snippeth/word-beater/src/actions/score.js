import { UPDATE_SCORE } from "./types";

//Change level
export const changeScore = (point) => dispatch => {
    dispatch({
        type: UPDATE_SCORE,
        payload: point
    })
}