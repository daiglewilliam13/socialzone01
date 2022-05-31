import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { action } from '../actions/user';
import {RootState } from '../app/store';

let initialState = { 
    user: {
        type: String,
    username: "GUEST" 
},
    status: {
        type: String,
        message: "idle",
    },
    error: {
        type: String,
        message: "",
    }
}

export const userLogin = createAsyncThunk(
    'userLogin',
    async (email, password) => {
        const response = await fetch('localhost:8080/v1/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
            })
        }
        )
        return (await response.json())
    }
)

export const userReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case 'login':
            return { username: action.payload };
        default:
            return state;
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: builder =>{
        builder
        .addCase(userLogin.pending, (state, action)=>{
            state.status.message = "logging in";
        })
        .addCase(userLogin.fulfilled, (state, action)=>{
            state.status.message = "login successful";
            state.user = {...state.user, ...action.payload};
        })
        .addCase(userLogin.rejected,(state, action)=>{
            state.status.message = "login failure"
            state.error.message = JSON.stringify(action.error.message);
        })
    }
})

export default userSlice.reducer;
