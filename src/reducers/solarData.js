export const loadSolarData = (state = {}, action) => {
  switch (action.type) {
    case "SET_SOLAR_DATA":
      return {
        inputs: action.data.data.inputs,
        outputs: action.data.data.outputs,
        historicalData: action.data.historicalData
      }
    default:
      return state
  }
}