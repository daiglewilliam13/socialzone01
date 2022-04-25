import React from 'react';
import './topnav.css';
import { FaStaylinked } from 'react-icons/fa';
const TopNav = () => {
    return(
        <div id="top-navbar-wrapper">
            <FaStaylinked id="brand-icon"/>
            <input type="text" id="search-bar"></input>
        </div>
    )
}

export default TopNav;