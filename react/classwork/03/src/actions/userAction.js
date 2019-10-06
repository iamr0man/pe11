import { USER_ADD, USER_LIST } from '../consts/types';

export function userAdd(user) {
    return dispatch => {
        dispatch({
            type: USER_ADD
        })
    }
}