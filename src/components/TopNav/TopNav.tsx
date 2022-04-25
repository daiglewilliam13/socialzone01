import React from 'react';
import './topnav.css';
import { FaStaylinked, FaSearch, FaBell, FaEnvelope, } from 'react-icons/fa';
const TopNav = () => {
    return(
        <div id="top-navbar-wrapper">
            <FaStaylinked className="topnav-icon"/>
                <input type="text" id="search-bar" placeholder='Search...'></input>
                <FaSearch className="topnav-icon"/>
                <FaBell className="topnav-icon" />
                <FaEnvelope className="topnav-icon" />
            <img id="topnav-profile-photo" src="../images/john-doe.jpg"></img>
        </div>
    )
}

export default TopNav;