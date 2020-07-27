import { currentProfileReducer, userQuoteReducer, allUserQuotesReducer } from '../reducers/userProfile'

describe('userProfile Reducers', () => {
  it('should return the initial state for currentProfileReducer', () => {
    const expected = { address: '', city: '', state: '', zipCode: '', validatedUser: false }
    const result = currentProfileReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('when receiving SET_CURRENT_PROFILE, should update with the created user profile', () => {
    const userProfile = { address: '123 street', city: 'Denver', state: 'CO', zipCode: '81111', validatedUser: true }
    const action = {
      type: 'SET_CURRENT_PROFILE',
      userProfile
    }
    const expectedResult = { address: '123 street', city: 'Denver', state: 'CO', zipCode: '81111', validatedUser: true }
    const result = currentProfileReducer({}, action)
    expect(result).toEqual(expectedResult)
  })
  
  it('should return the initial state for userQuoteReducer', () => {
    const expected = { userInputs: {}, dataRetrieved: {}, id: null} 
    const result = userQuoteReducer(undefined, {})
    expect(expected).toEqual(result)
  })

  it('when receiving USER_QUOTE, should update state with the passed in quote', () => {
    const quote = { systemSize: 1, moduleType: 0, arrayType: 2, systemLosses: 14, tilt: 45, azimuth: 7, id: 1 }
    
    const action = {
      type: 'USER_QUOTE',
      quote
    }
    const expectedResult = { systemSize: 1, moduleType: 0, arrayType: 2, systemLosses: 14, tilt: 45, azimuth: 7, id: 1 }
    
    const result = userQuoteReducer({}, action)
    expect(result).toEqual(expectedResult)
  })

  it('should return the initial state for allUserQuotesReducer', () => {
    const expected = []
    const result = allUserQuotesReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('when receiving STORE_USER_QUOTE, should update state with the added userQuote', () => {
    const userQuote = { systemSize: 1, moduleType: 0, arrayType: 2, systemLosses: 14, tilt: 45, azimuth: 7, id: 1 }
    const action = {
      type: 'STORE_USER_QUOTE',
      userQuote
    }
    const expectedResult = [{ systemSize: 1, moduleType: 0, arrayType: 2, systemLosses: 14, tilt: 45, azimuth: 7, id: 1 }]
    const result = allUserQuotesReducer([], action)
    expect(result).toEqual(expectedResult)
  })


})