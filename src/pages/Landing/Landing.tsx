import React, {useState} from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import './landing.css';

const Landing = () => {
    const [showLogin, setShowLogin] = useState(true)
    const handleClick = (e:any) =>{
        setShowLogin(showLogin => !showLogin);
    }
    return(
        <>
        <div id="landing-wrapper">
            {(showLogin)
            ? <Login />
            : <Register />
        }
        <div className="display-switch">
            <p>New Here?</p><button id="register-view"onClick={(e)=>handleClick(e)}>Register Here!</button>
        </div>
        </div>
        </>
    )
}

export default Landing;