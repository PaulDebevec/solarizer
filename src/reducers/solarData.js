export const loadSolarData = (state = {}, action) => {
  switch (action.type) {
    case "SET_SOLAR_DATA":
      return {
        acMonthly: action.data.data.ac_monthly,
        solRadMonthly: action.data.data.solrad_monthly,
        savingsMonthly: action.data.data.value_monthly,
        percentOffset: action.data.data.percent_offset,
        historicalData: action.data.historicalData
      }
    default:
      return state
  }
}
