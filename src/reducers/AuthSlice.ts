import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { action } from '../actions/user';
import { RootState } from '../app/store';

let initialState = {

    isLoggedIn: false,
    auth: {
        tokens: {
            access: {
                token: "",
                expires: ""
            },
            refresh: {
                token: "",
                expires: ""
            },
        },
        user: {
            name: "GUEST",
            email: "",
            friends: [],
            id: "",
            isEmailVerified: false,
            role: "user",
            followers: [],
            following: [],
        }
    },
    status: "idle",
    error: "",
}

export const loginUser = createAsyncThunk('loginUser', async (data: { email: string, password: string }) => {
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

export const registerNewUser = createAsyncThunk('registerNewUser', async (data: {email: string, password: string, name: string})=>{
    const response = await fetch('http://localhost:8080/v1/auth/register',{
        method:'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": data.email,
            "password": data.password,
            "name":data.name
        })
    }
    )
    return(await response.json())
})

const authSlice = createSlice({
    name: 'AuthStatus',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.status = "logging in";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "login successful";
                state.isLoggedIn = true
                console.log(action.payload)
                state.auth = { ...state.auth = action.payload }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "login failure"
                state.error = JSON.stringify(action.error.message);
            })
            .addCase(registerNewUser.pending, (state, action) => {
                state.status = "registering";
            })
            .addCase(registerNewUser.fulfilled, (state, action) => {
                state.status = "register successful";
                state.isLoggedIn = true
                console.log(action.payload)
                state.auth = { ...state.auth = action.payload }
            })
            .addCase(registerNewUser.rejected, (state, action) => {
                state.status = "register failure"
                state.error = JSON.stringify(action.error.message);
            })
    }
})

export default authSlice.reducer;
