import React from 'react';

const Login = () => {

    return(
        <div id="login-wrapper">
            <h3>Log in</h3>
            <div className="form-wrapper" id="login-form">
                <form>
                    <input placeholder='Email' type="text"></input>
                    <input placeholder='Password' type="password"></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
