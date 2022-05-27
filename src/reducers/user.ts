import { action } from '../actions/user';

let initialState = { 
    type: String,
    username: "GUEST" 
}

export const userReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case 'login':
            return { ...state, username: action.payload };
        default:
            return state;
    }
}