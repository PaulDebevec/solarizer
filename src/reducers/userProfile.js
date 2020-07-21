


export const currentProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_PROFILE":
      return action.userProfile     
    default:
      return state
  }
}

let initialQuoteState = {
  userInputs: {},
  dataRetrieved: {},
  id: null
}
export const userQuoteReducer = (state = initialQuoteState, action) => {
  switch (action.type) {
    case "USER_QUOTE":
      return action.quote

    default:
      return state
  }
}

export const allUserQuotesReducer = (state= [], action) => {
  switch (action.type) {
    case "STORE_USER_QUOTE":
      return [...state, action.userQuote]


    default:
      return state
  }
}


