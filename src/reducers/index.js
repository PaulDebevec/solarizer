import { combineReducers } from 'redux'
import * as reducers from './userProfile'
import { loadSolarData } from './solarData'

const rootReducer = combineReducers({
  userProfile: reducers.currentProfileReducer,
  userQuote: reducers.userQuoteReducer,
  allUserQuotes: reducers.allUserQuotesReducer,
  solarData: loadSolarData 
})

export default rootReducer;