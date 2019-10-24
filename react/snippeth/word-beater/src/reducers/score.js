import { UPDATE_SCORE, FINISH_GAME } from "../actions/types";

const initialState = {
    score: -1,
    isPlaying: true
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_SCORE:
            return {
                ...state,
                score: state.score + payload,
            }
        case FINISH_GAME:
            return {
                ...state,
                isPlaying: false
            }
        default:
            return {
                ...state
            }
    }
}