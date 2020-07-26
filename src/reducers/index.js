import { combineReducers } from 'redux'
import * as reducers from './userProfile'
import { loadSolarData } from './solarData'


const appReducer = combineReducers({
    userProfile: reducers.currentProfileReducer,
    userQuote: reducers.userQuoteReducer,
    allUserQuotes: reducers.allUserQuotesReducer,
    solarData: loadSolarData 
})
// const rootReducer = combineReducers({
//   userProfile: reducers.currentProfileReducer,
//   userQuote: reducers.userQuoteReducer,
//   allUserQuotes: reducers.allUserQuotesReducer,
//   solarData: loadSolarData 
// })

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;