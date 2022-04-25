import React from "react";
import profilePicture from '../../images/jane-doe.jpg';
const Post = () => {

    return(
        <div className="post-wrapper">
            <div className="profile-image">
                <img src={profilePicture}/>
            </div>
            <div className="content-heading-wrapper"></div>
        </div>
    )
}