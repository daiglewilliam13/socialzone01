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
            <button onClick={(e)=>handleClick(e)}>Register</button>
        </div>
        </>
    )
}

export default Landing;