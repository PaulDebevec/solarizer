import { combineReducers } from 'redux'
import * as reducers from './userProfile'
// import * as reducers from './userQuote'

const rootReducer = combineReducers({
  userProfile: reducers.currentProfileReducer,
  userQuote: reducers.userQuoteReducer,
  allUserQuotes: reducers.allUserQuotesReducer
})

export default rootReducer;