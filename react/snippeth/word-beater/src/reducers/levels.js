import { CHANGE_LEVEL, PROGRESS_GAME, FINISH_GAME } from "../actions/types";
import { EASY } from "../constans/levels";

const initialState = {
    level: EASY,
    staticLevel: EASY
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PROGRESS_GAME:
            return {
                ...state,
                level: state.level - 1,
            }
        case CHANGE_LEVEL:
            return {
                level: payload,
                staticLevel: payload
            }
        case FINISH_GAME:
            return {
                ...state,
                level: 0
            }
        default:
            return {
                ...state
            }
    }
}