export const currentUserProfile = (userProfile) => ({
  type: "SET_CURRENT_PROFILE",
  userProfile,
});

export const userQuote = (quote) => ({
  type: "USER_QUOTE",
  quote
})

export const allUserQuotes = (userQuote) => ({
  type: "STORE_USER_QUOTE",
  userQuote
})

export const loadSolarData = (data) => ({
  type: "SET_SOLAR_DATA",
  data
})

// export const clearSolarData = () => ({
//   type: "CLEAR_SOLAR_DATA",
// })

export const clearAllData = () => ({
  type: "USER_LOGOUT"
})

