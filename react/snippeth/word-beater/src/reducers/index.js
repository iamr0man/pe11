import { combineReducers } from 'redux'
import levels from './levels'
import currentWord from './currentWord'

export default combineReducers({
    levels,
    currentWord
})