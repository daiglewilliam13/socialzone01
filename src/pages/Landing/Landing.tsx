import React, {useState} from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import './landing.css';

const Landing = () => {
    const [showLogin, setShowLogin] = useState(true)
    const handleClick = (e:any) =>{
        setShowLogin(showLogin => !showLogin);
    }
    let buttonText = showLogin ? "Register Here!" : "Log In";
    let viewText = showLogin ? "New here?" : "Already have an account?";
    return(
        <>
        <div id="landing-wrapper">
            {(showLogin)
            ? <Login />
            : <Register />
        }
        <div className="display-switch">
            <p>{viewText}</p><button id="register-view"onClick={(e)=>handleClick(e)}>{buttonText}</button>
        </div>
        </div>
        </>
    )
}

export default Landing;