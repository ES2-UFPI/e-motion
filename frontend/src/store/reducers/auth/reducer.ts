const INITIAL_STATE = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2MjU5NTY5OTJ9.1y3VR6CCAYNLoCIoKb_JOxWi7TaPON4o7bDqYUMGem0'
};

const auth = (state = INITIAL_STATE, action: any) => {
    const baseAction = '@auth/';
    switch (action.type) {
        case `${baseAction}SET_TOKEN`:
            return {
                ...state,
                accessToken: action.payload.auth.accessToken || "",
            };
        default:
            return state;
    }
}

export default auth;