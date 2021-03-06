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
    const userQuote = { systemSize: 1, moduleType: 0, arrayType: 2, systemLosses: 14, tilt: 45, azimuth: 7 }
    const expectedAction = {
      type: 'STORE_USER_QUOTE',
      userQuote
    }
    const result = actions.allUserQuotes(userQuote)
    expect(result).toEqual(expectedAction)
  })

  it('should have a SET_SOLAR_DATA with a correct payload', () => {
    const data = {
      ac_monthly: [521.8912353515625,
        564.6233520507812,
        737.8564453125,
        739.79345703125,
        829.3699951171875,
        847.98876953125,
        834.9229125976562,
        805.8444213867188,
        727.6734008789062,
        666.8536376953125,
        542.8961791992188,
        471.930419921875],
      solrad_monthly: [5.084908962249756,
        6.171108722686768,
        7.394773483276367,
        7.778176307678223,
        8.63671875,
        9.294778823852539,
        8.980157852172852,
        8.637933731079102,
        7.904896259307861,
        6.774695873260498,
        15.589939594268799,
        14.561224937438965],
      value_monthly: [57.668981506347656,
        62.39088040161133,
        81.53313720703125,
        81.74717700195312,
        91.64538446044922,
        93.70275903320312,
        92.25898184204101,
        89.04580856323243,
        80.40791079711914,
        73.68732696533203,
        159.99002780151367,
        152.14831140136719],
      percent_offset: "50"
    }

    const expectedAction = {
      type: 'SET_SOLAR_DATA',
      data
    }
    const result = actions.loadSolarData(data)
    expect(result).toEqual(expectedAction)
  })

  it('should clear all redux store data on user logout', () => {
    const expectedAction = {
      type: "USER_LOGOUT"
    }
    const result = actions.clearAllData()
    expect(result).toEqual(expectedAction)
  })

    it('should have a SET_SOLAR_FAQS with a correct payload', () => {
      const data = [
        {faq: "Overview", answer: "Solarizer is a web app for solar energy enthusiast…voltaic (PV) system based on a few simple inputs."},
        {faq: "Get Started", answer: "Users provide information about the system 's loca…and an estimate of the value of that electricity."},
        {faq: "System Size", answer: "System Size is the DC (direct current) power ratin…test conditions. The default size if usually 4kW."},
        {faq: "Module Type", answer: "Module Type describes the PV modules in the solar array.  Most module types will be Standard."},
        {faq: "Array Type", answer: "The array type describes whether the PV modules in… option is appropriate for ground-mounted systems"},
        {faq: "System Losses", answer: "The system losses account for performance losses y… more.  The default system loss percentage is 14%"},
        {faq: "Tilt", answer: "The tilt angle is the angle from horizontal of the…y between 0-45%. The default value is 20 degrees."},
        {faq: "Azimuth", answer: "For a fixed array, the azimuth angle is the angle …= 135°, S = 180°, SW = 225°, W = 270°, SW = 315 °"},
        {faq: "Retail Electricty Rate", answer: "The national average rate is 11 cents per kWh"},
        ]
      const expectedAction = {
        type: 'SET_SOLAR_FAQS',
        data
      }
      const result = actions.loadSolarFaqs(data)
      expect(result).toEqual(expectedAction)
    })
})
