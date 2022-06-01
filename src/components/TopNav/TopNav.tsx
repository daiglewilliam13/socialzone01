import React from 'react';
import './topnav.css';
import { FaStaylinked, FaSearch, FaBell, FaEnvelope, } from 'react-icons/fa';
import img from '../../images/john-doe.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const TopNav = () => {
    const authStatus = useSelector((state: RootState) => state.authStatus);
    const username = authStatus.userInfo.user.name
    return (
        <div id="topnav">
            <div id="top-link-wrapper">
                <div className="left-group">
                    <FaStaylinked className="topnav-icon " />
                    <input type="text" id="search-bar" placeholder='Search...'></input>
                    <FaSearch className="topnav-icon" />
                </div>
                <div className="right-group">
                    <span>{username}</span>
                    <FaBell className="topnav-icon right-side" />
                    <FaEnvelope className="topnav-icon right-side" />
                    <img id="topnav-profile-photo" className="right-side" src={img} />
                </div>
            </div>
        </div>
    )
}

export default TopNav;