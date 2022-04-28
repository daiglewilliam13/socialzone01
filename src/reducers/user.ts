import { action } from '../actions/user';

export interface userState { username: String }

let initialState: userState = { username: "TEST NAME" }

export const userReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case 'login':
            return { ...state, username: action.payLoad };
        default:
            return state;
    }
}