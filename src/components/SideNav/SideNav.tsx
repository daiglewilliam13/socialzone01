import React from 'react';
import './sidenav.css';
import { useState } from 'react';
import { FaChevronLeft} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';


const SideNav = () => {
    const navigate = useNavigate();
    const authStatus = useSelector((state: RootState) => state.authStatus);
    const refreshToken = authStatus.auth.tokens.refresh.token;
    const [expanded, setExpanded] = useState(false);
    const sidenavStatus = expanded ? 'expanded' : 'collapsed';
    const moveSideBar = () => {
        setExpanded(expanded => !expanded);
    }
    const handleLogout = () => {
        fetch('http://localhost:8080/v1/auth/logout', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "refreshToken": refreshToken
            })
    }).then((res)=>{
        console.log(res); 
        navigate('/')})
    }

    return (
        <div id="sidenav-wrapper" className={`sidenav-${sidenavStatus}`}>
            <div id="sidenav" >
                <div id="side-link-wrapper">
                    <button>Home</button>
                    <button>Friends</button>
                    <button>Messages</button>
                    <button>Notifications</button>
                    <button>Profile</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <button onClick={moveSideBar} id="sidebar-control"><FaChevronLeft className={`control-icon-${sidenavStatus}`}/></button>
        </div>
    )
}

export default SideNav;