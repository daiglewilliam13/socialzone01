import React from 'react';
import './sidenav.css';
import {useState} from 'react';
import {FaChevronLeft} from 'react-icons/fa';


const SideNav = () => {
    const [expanded, setExpanded] = useState(true);
    const sidenavStatus = expanded ? 'expanded' : 'collapsed';
    const moveSideBar = () =>{
        setExpanded(expanded=> !expanded);
    }
    return(
        <div id="sidenav" className={`sidenav-${sidenavStatus}`}>
            <div id="side-link-wrapper">
                <p>Home</p>
                <p>Friends</p>
                <p>Messages</p>
                <p>Notifications</p>
                <p>Chatrooms</p>
                <p>Forums</p>
                <p>Profile</p>
            </div>
            <button onClick={moveSideBar} id="sidebar-control"><FaChevronLeft /></button>
        </div>
    )
}

export default SideNav;