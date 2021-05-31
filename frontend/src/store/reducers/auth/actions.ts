interface Tokens {
    accessToken: string
    refreshToken: string
}

export const SetTokens = (tokens: Tokens) => {
    return {
      type: '@auth/SET_TOKEN',
      payload: { tokens }
    }
}