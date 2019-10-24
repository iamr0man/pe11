import { SET_WORD, SET_CURRENT } from "../actions/types";

const initialState = {
    inputWord: '',
    currentWord: '',
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_WORD:
            return {
                ...state,
                inputWord: payload,
            }
        case SET_CURRENT:
            return {
                ...state,
                currentWord: payload,
            }
        default:
            return {
                ...state
            }
    }
}