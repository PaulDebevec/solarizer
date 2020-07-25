import { currentProfileReducer, userQuoteReducer, allUserQuotesReducer } from '../reducers/userProfile'

describe('userProfile Reducers', () => {
  it('should return the initial state', () => {
    const expected = { address: '', city: '', state: '', zipCode: '', validatedUser: false }
    const result = currentProfileReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should', () => {

  })
})