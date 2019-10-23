import { SET_WORD, SET_CURRENT } from "./types";

//Change level
export const changeInput = word => dispatch => {
    dispatch({
        type: SET_WORD,
        payload: word
    })
}

//Set current word
export const changeCurrent = word => dispatch => {
    dispatch({
        type: SET_CURRENT,
        payload: word
    })
} 