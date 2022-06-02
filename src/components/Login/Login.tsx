import React, { useState } from 'react';
import './login.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../reducers/AuthSlice';
import { RootState, useAppDispatch } from '../../app/store';
import { unwrapResult } from '@reduxjs/toolkit';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [buttonText, setButtonText] = useState("Log In")
    const handleLogin = async (e: any, email: string, password: string) => {
        e.preventDefault();
        setButtonText("Logging In")
        dispatch(loginUser({ email, password })).unwrap().then((res)=>{
            console.log(res)
            navigate('/home')
        })

    }
    return (
        <div id="login-wrapper">
            <div id="login-text-wrapper">
                <h3>Welcome to SocialZone!</h3>
                <p>Come chat, discuss, and showcase yourself on the worlds most active social-network!</p>
            </div>
            <div id="login-form">
                <h3>Log in</h3>
                <div className="form-wrapper" id="login-form">
                    <form>
                        <label htmlFor="email">Email Address:</label>
                        <input required placeholder='email@example.com' type="text" name="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                        <label htmlFor="password">Password:</label>
                        <input required placeholder='Password' type="password" name="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                        <button type='submit' id="login-button" onClick={(e) => handleLogin(e, email, password)}>{buttonText}</button>
                    </form>
                </div>
                <hr></hr>
                <div id="other-auth-wrapper">
                    <p>Or log in with:</p>
                    <button id="google-login"><FaGoogle className="login-icon" />Google</button>
                    <button id="facebook-login"><FaFacebook className="login-icon" />Facebook</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
