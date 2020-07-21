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

