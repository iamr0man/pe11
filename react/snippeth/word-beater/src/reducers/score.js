import { UPDATE_SCORE } from "../actions/types";

const initialState = {
    score: -1
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_SCORE:
            return {
                score: state.score + payload
            }
        default:
            return {
                ...state
            }
    }
}