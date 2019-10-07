import { USER_ADD, USER_LIST } from '../consts/types'

const initState = {
    users: []
}

export default function(state = initState, action) {
    switch(action) {
        case USER_ADD:
            break;
        case USER_LIST:
            break;
        default:
            return state;
    }
}