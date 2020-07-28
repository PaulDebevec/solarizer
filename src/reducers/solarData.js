export const loadSolarData = (state = {}, action) => {
  switch (action.type) {
    case "SET_SOLAR_DATA":
      return {
        acMonthly: action.data.ac_monthly,
        solRadMonthly: action.data.solrad_monthly,
        savingsMonthly: action.data.value_monthly,
        percentOffset: action.data.percent_offset,
      }
    default:
      return state
  }
}
