export function setUser(user: any) {
    return {
        type: '@user/SET_USER',
        payload: { user },
    };
}

export function clearUser() {
    return {
        type: '@user/CLEAR_USER'
    };
}