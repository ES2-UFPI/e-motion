interface Tokens {
    accessToken: string
}

export const SetTokens = (tokens: Tokens) => {
    return {
      type: '@auth/SET_TOKEN',
      payload: { tokens }
    }
}