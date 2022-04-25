import React from 'react';
import './sidenav.css';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const SideNav = () => {
    const [expanded, setExpanded] = useState(false);
    const sidenavStatus = expanded ? 'expanded' : 'collapsed';
    const moveSideBar = () => {
        setExpanded(expanded => !expanded);
    }
    return (
        <div id="sidenav-wrapper" className={`sidenav-${sidenavStatus}`}>
            <div id="sidenav" >
                <div id="side-link-wrapper">
                    <p>Home</p>
                    <p>Friends</p>
                    <p>Messages</p>
                    <p>Notifications</p>
                    <p>Chatrooms</p>
                    <p>Forums</p>
                    <p>Profile</p>
                </div>
            </div>
            <button onClick={moveSideBar} id="sidebar-control"><FaChevronLeft className={`control-icon-${sidenavStatus}`}/></button>
        </div>
    )
}

export default SideNav;