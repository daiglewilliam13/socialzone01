import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { action } from '../actions/user';
import {RootState } from '../app/store';

let initialState = {
    isLoggedIn: false,
    userInfo: {
        user:{
            name: "GUEST",
            email: "",
            friends: [],
            id: "",
            isEmailVerified: false,
            role: "user",
            timelineComments: [],
            timelinePosts: [], 
        }
},
    status:"idle",
    error: "",
}

export const loginUser = createAsyncThunk('loginUser', async (data: {email:string, password:string}) => {
        try{const response = await fetch('http://localhost:8080/v1/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": data.email,
                "password": data.password,
            })
        }
        )
        return (await response.json())
    } catch (err) {
            console.log(err)
        }
    }
)

const authSlice = createSlice({
    name: 'AuthStatus',
    initialState,
    reducers: {
    },
    extraReducers: builder =>{
        builder
        .addCase(loginUser.pending, (state, action)=>{
            state.status = "logging in";
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.status = "login successful";
            state.isLoggedIn = true
            console.log(action.payload)
            state.userInfo = {...state.userInfo = action.payload}
        })
        .addCase(loginUser.rejected,(state, action)=>{
            state.status = "login failure"
            state.error = JSON.stringify(action.error.message);
        })
    }
})

export default authSlice.reducer;
