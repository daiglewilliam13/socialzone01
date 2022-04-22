import React from 'react';

const Landing = () => {

    return(
        <div id="landing-wrapper">
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
        </div>
    )
}

export default Landing;