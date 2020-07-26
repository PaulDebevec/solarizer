import * as actions from './index'

describe('Actions', () => {
  it('should have a SET_CURRENT_PROFILE with a correct payload', () => {
    const userProfile = { address: '123 street', city: 'Denver', state: 'CO', zipCode: '80111', validateUser: true }
    const expectedAction = {
      type: 'SET_CURRENT_PROFILE',
      userProfile
    }
    const result = actions.currentUserProfile(userProfile)
    expect(result).toEqual(expectedAction)
  })

  it('should have a USER_QUOTE with a correct payload', () => {
    const quote = { systemSize: 1, moduleType: 0, arrayType: 2, systemLosses: 14, tilt: 45, azimuth: 7 }
    const expectedAction = {
      type: 'USER_QUOTE',
      quote
    }
    const result = actions.userQuote(quote)
    expect(result).toEqual(expectedAction)
  })

  it('should have a STORE_USER_QUOTE with a correct payload', () => {

  })

  it('should have a SET_SOLAR_DATA with a correct payload', () => {

  })

})