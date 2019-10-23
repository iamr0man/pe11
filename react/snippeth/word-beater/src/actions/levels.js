import { CHANGE_LEVEL } from "./types";

//Change level
export const changeLevel = level => dispatch => {
    dispatch({
        type: CHANGE_LEVEL,
        payload: level
    })
}