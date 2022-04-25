import React from "react";
import profilePic from '../../images/jane-doe.jpg';
import './friend.css';

const friendObject = {
    name: "Jane Doe",
    picUrl: profilePic
}

const Friend = () => {
    return(
        <div className="friend-display-wrapper">
        <img className="friend-list-picture" src={friendObject.picUrl} />
        <p className="friend-name">{friendObject.name}</p>
        </div>
    )
}

export default Friend;