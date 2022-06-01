import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { action } from '../actions/user';
import {RootState } from '../app/store';

let initialState = {
    isLoggedIn: false,
    userInfo: {
    username: "GUEST" 
},
    status:"idle",
    error: "",
}

export const loginUser = createAsyncThunk('userLogin', async (data: {email:string, password:string}) => {
        const response = await fetch('http://localhost:8080/v1/auth/login', {
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
            state.userInfo = {...state = action.payload};
        })
        .addCase(loginUser.rejected,(state, action)=>{
            state.status = "login failure"
            state.error = JSON.stringify(action.error.message);
        })
    }
})

export default authSlice.reducer;
