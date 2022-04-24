import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = () => (
    
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
                    <button type='submit' id="login-button">Log in</button>
                </form>
            </div>
            <hr></hr>
            <div id="other-auth-wrapper">
                <p>Or log in with:</p>
                <button id="google-login"><FontAwesomeIcon icon="fa-brands fa-google" />Google</button>
                <button id="facebook-login">Facebook</button>
                <div id="signup-wrapper">
                    <p>New User? <a href="#">Register Here!</a></p>
                </div>
            </div>
        </div>    
    </div>
)

export default Login;
