import { createStore, bindActionCreators } from 'redux';

const reducer = (state = 0, action) => {

    if (action.type === 'INC')
        return state + 1;
    else if (action.type === 'DEC')
        return state - 1;
    else if (action.type === 'RND')
        return state + action.payload
    else
        return state;
}

const store = createStore(reducer);
const { dispatch } = store;

const inc = () => ({ type: 'INC' })
const dec = () => ({ type: 'DEC' })
const rnd = (payload) => ({ type: 'RND', payload })

const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
    'incDispatch': inc,
    'decDispatch': dec,
    'rndDispatch': rnd,
}, dispatch)

document.getElementById('inc').addEventListener('click', incDispatch)
document.getElementById('dec').addEventListener('click', decDispatch)
document.getElementById('rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 110);
    rndDispatch(payload)
})

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
}

store.subscribe(update);
