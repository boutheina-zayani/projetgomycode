import {combineReducers} from 'redux'
import userReducer from './user_reducers'
import profileReducer from './profile_reducers'

const rootReducer=combineReducers({userReducer,profileReducer})
export default rootReducer 