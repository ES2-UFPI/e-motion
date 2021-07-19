const INITIAL_STATE = {
    name: "",
    nickname: "",
    speciality: "",
    crm_crp: "",
    email: "",
    phone: "",
    type: null,
    avatar: 1
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
        case `${baseAction}UPDATE_USER`:
            return {
                ...state, ...action.payload.user
            }
        default:
            return state;
    }
}

export default user;