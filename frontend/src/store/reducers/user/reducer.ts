const INITIAL_STATE = {
    name: ""
};

const user = (state = INITIAL_STATE, action: any) => {
    const baseAction = '@user/';
    switch (action.type) {

        case `${baseAction}SET_USER`:
            return {
                ...state, ...action.payload.user
            }
        case `${baseAction}CLEAR_USER`:
            return {
                ...state, ...INITIAL_STATE
            }
        default:
            return state;
    }
}

export default user;