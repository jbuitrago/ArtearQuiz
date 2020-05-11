import { combineReducers } from 'redux'
import questionReducer from './questionReducer'
import peopleReducer from './peopleReducer'
export default combineReducers({
    questionReducer,
    peopleReducer
})
