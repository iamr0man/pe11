import { CHANGE_LEVEL } from "../actions/types";
import { EASY } from "../constans/levels";

const initialState = {
    level: EASY
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_LEVEL:
            return {
                level: payload
            }
        default:
            return {
                ...state
            }
    }
}