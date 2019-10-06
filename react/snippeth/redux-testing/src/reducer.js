const reducer = (state = 13, action) => {

    if (action.type === 'INC')
        return state + 1;
    else if (action.type === 'DEC')
        return state - 1;
    else if (action.type === 'RND')
        return state + action.payload
    else
        return state;
}

export default reducer;