import React, {useState} from 'react';
import './topnav.css';
import { FaStaylinked, FaSearch, FaBell, FaEnvelope, } from 'react-icons/fa';
import img from '../../images/john-doe.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useNavigate, useLocation } from 'react-router-dom';

const TopNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const authStatus = useSelector((state: RootState) => state.authStatus);
    const username = authStatus.auth.user.name
    const id = authStatus.auth.user.id;
    const [searchTerms, setSearchTerms] = useState("")
    const toSearchPage = () => {
        navigate('/search/'+searchTerms, {state: {terms: searchTerms}})
    }
    return (
        <div id="topnav">
            <div id="top-link-wrapper">
                <div className="left-group">
                    <FaStaylinked onClick={()=>{navigate('/home/')}} className="topnav-icon " />
                    <input type="text" id="search-bar" placeholder='Search...' value={searchTerms} onChange={(e)=>{setSearchTerms(e.target.value)}}></input>
                    <FaSearch className="topnav-icon" onClick={()=>toSearchPage()}/>
                </div>
                <div className="right-group">
                    <span>{username}</span>
                    <FaBell onClick={()=>{navigate('/notifications/')}} className="topnav-icon right-side" />
                    <FaEnvelope onClick={() => { navigate('/messages/') }} className="topnav-icon right-side" />
                    <img onClick={() => { navigate('/profile/'+id) }} id="topnav-profile-photo" className="right-side" src={img} />
                </div>
            </div>
        </div>
    )
}

export default TopNav;