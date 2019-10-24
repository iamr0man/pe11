import { combineReducers } from 'redux'
import levels from './levels'
import words from './words'
import alert from './alert'

export default combineReducers({
    levels,
    words,
    alert
})