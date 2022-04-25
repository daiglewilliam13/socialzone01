import React from 'react';
import './login.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    return(
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
                    <input placeholder='email@example.com' type="text" name="email"></input>
                    <label htmlFor="password">Password:</label>
                    <input placeholder='Password' type="password" name="password"></input>
                    <button type='submit' id="login-button" onClick={()=>navigate('/home')}>Log in</button>
                </form>
            </div>
            <hr></hr>
            <div id="other-auth-wrapper">
                <p>Or log in with:</p>
                <button onClick={()=>navigate('/home')} id="google-login"><FaGoogle className="login-icon" />Google</button>
                <button id="facebook-login"><FaFacebook className="login-icon"/>Facebook</button>
                <div id="signup-wrapper">
                    <p>New User? <a href="#">Register Here!</a></p>
                </div>
            </div>
        </div>    
    </div>
)
}

export default Login;