import React, { useState } from 'react';
import './login.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../reducers/AuthSlice';
import { RootState } from '../../app/store';


const Login = () => {
    let buttonOptions = {
        disabled: false,
        text: "Log In"
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState("Log In")
    const [isLoggedIn, setIsLoggedIn] = useState(useSelector((state: RootState) => state.authStatus.isLoggedIn));
    const [status, setStatus] = useState(useSelector((state: RootState) => state.authStatus.status));
    const handleLogin = async (username: string, password: string) => {
        setButtonText("Logging In")
        dispatch(loginUser({ email, password }));

    }
    console.log(status)
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
                        <input placeholder='email@example.com' type="text" name="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                        <label htmlFor="password">Password:</label>
                        <input placeholder='Password' type="password" name="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                        <button type='submit' id="login-button" onClick={() => handleLogin(email, password)}>{buttonText}</button>
                    </form>
                </div>
                <hr></hr>
                <div id="other-auth-wrapper">
                    <p>Or log in with:</p>
                    <button id="google-login"><FaGoogle className="login-icon" />Google</button>
                    <button id="facebook-login"><FaFacebook className="login-icon" />Facebook</button>
                    <div id="signup-wrapper">
                        <p>New User? <a href="#">Register Here!</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
