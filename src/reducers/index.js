import { combineReducers } from 'redux'
import * as reducers from './userProfile'

const rootReducer = combineReducers({
  userProfile: reducers.currentProfileReducer
})

export default rootReducer;