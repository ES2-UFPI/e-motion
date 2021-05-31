const INITIAL_STATE = {
    accessToken: '',
    refreshToken: ''
};

const auth = (state = INITIAL_STATE, action: any) => {
    const baseAction = '@auth/';
    switch (action.type) {
        case `${baseAction}SET_TOKEN`:
            return {
                ...state,
                accessToken: action.payload.auth.accessToken || "",
                refreshToken: action.payload.auth.refreshToken || ""
            };
        default:
            return state;
    }
}

export default auth;