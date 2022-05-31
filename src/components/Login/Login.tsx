import React, {useState} from 'react';
import './login.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reducers/user';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (username: string, password: string) => {
        console.log(`attempting to log in as ${username}`)
            dispatch(loginUser({email,password}))
        navigate('/home')
    }

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
                    <input placeholder='email@example.com' type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                    <label htmlFor="password">Password:</label>
                    <input placeholder='Password' type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <button type='submit' id="login-button" onClick={()=>handleLogin(email, password)}>Log in</button>
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
