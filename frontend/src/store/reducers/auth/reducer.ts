const INITIAL_STATE = {
    accessToken: ''
};

const auth = (state = INITIAL_STATE, action: any) => {
    const baseAction = '@auth/';
    switch (action.type) {
        case `${baseAction}SET_TOKEN`:
            return {
                ...state,
                accessToken: action.payload.tokens.accessToken || "",
            };
        case `${baseAction}CLEAR_TOKEN`:
            return {
                ...state,
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}

export default auth;