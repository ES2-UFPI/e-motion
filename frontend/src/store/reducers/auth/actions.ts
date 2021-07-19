interface Tokens {
  accessToken: string
}

export const setToken = (tokens: Tokens) => {
  return {
    type: '@auth/SET_TOKEN',
    payload: { tokens }
  }
}

export const clearToken = () => {
  return {
    type: '@auth/CLEAR_TOKEN'
  }
}