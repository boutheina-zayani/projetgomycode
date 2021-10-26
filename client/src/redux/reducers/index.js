import {combineReducers} from 'redux'
import userReducer from './user_reducers'
import profileReducer from './profile_reducers'
import ClassReducer from './classe_reducers'
import PupilReducer from './pupil_reducers'

const rootReducer=combineReducers({userReducer,profileReducer,ClassReducer,PupilReducer})
export default rootReducer 