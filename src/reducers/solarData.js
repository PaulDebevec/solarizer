
export const loadSolarData = (state = {}, action) => {
    switch (action.type) {
        case "SET_SOLAR_DATA":
            return {
                inputs: action.data.inputs,
                outputs: action.data.outputs
            }
        default:
            return state
    }
}