import React from 'react';
import './login.css';
const Login = () => (
    <div id="login-wrapper">
        <div id="login-text-wrapper">
            <h3>Welcome to SocialZone!</h3>
            <p>Come chat, discuss, and showcase yourself on the worlds most active social-network!</p>
        </div>
        <h3>Log in</h3>
        <div className="form-wrapper" id="login-form">
            <form>
                <input placeholder='Email' type="text"></input>
                <input placeholder='Password' type="password"></input>
                <button type='submit'>Login</button>
            </form>
        </div>
        <hr></hr>
        <div id="other-auth-wrapper">
            <p>Or log in with:</p>
            <button>Google</button>
            <button>Facebook</button>
        </div>

    </div>
)

export default Login;
