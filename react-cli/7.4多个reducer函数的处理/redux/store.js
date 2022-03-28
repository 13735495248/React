import {createStore,combineReducers} from'redux'
import numReducer from './numReducer'
import personReducer from './personReducer'
//combineReducers函数用于合并多个reducer
const allReducer = combineReducers({
    num:numReducer,
    person:personReducer
})

export default createStore(allReducer)