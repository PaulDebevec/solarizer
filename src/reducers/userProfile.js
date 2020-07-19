export const currentProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_PROFILE":
      return action.userProfile;
    default:
      return state
  }
}