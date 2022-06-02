import React, { useState } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useAppDispatch } from "../../app/store";

const Register = () => {
    const [buttonText, setButtonText] = useState("Register");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const handleRegister = async (e: any, email: string, password: string, name: string) => {
        let newUserData = {
            "email": email,
            "password": password,
            "name": name
        }
        e.preventDefault()
        console.log(newUserData)
    }
    return (
        <div id="login-wrapper">
            <div id="login-text-wrapper">
                <h3>Welcome to SocialZone!</h3>
                <p>Come chat, discuss, and showcase yourself on the worlds most active social-network!</p>
            </div>
            <div id="login-form">
                <h3>Register</h3>
                <div className="form-wrapper" id="login-form">
                    <form>
                        <label htmlFor="email">Email Address:</label>
                        <input required placeholder='email@example.com' type="text" name="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                        <label htmlFor="name">Name:</label>
                        <input required placeholder="Name?" type="text" name="name" onChange={(e) => { setName(e.target.value) }}></input>
                        <label htmlFor="password">Password:</label>
                        <input required placeholder='Password' type="password" name="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                        <label htmlFor="Confirm Password">Confirm Password:</label>
                        <input required placeholder='Confirm Password' type="password" name="password" onChange={(e) => { setPassword2(e.target.value) }}></input>
                        <p id="passwordMatch">{password === password2 ? "" : "Passwords do not match"}</p>
                        <button type='submit' id="login-button"
                            onClick={(e) => { handleRegister(e, email, password, name) }}>
                            {buttonText}
                        </button>
                    </form>
                </div>
                <hr></hr>
                <div id="other-auth-wrapper">
                    <p>Or Register with:</p>
                    <button id="google-login"><FaGoogle className="login-icon" />Google</button>
                    <button id="facebook-login"><FaFacebook className="login-icon" />Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default Register;