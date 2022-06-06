import React, { FC } from "react";
import './showprofile.css';

interface ProfileProps {
    id: number
}

const ShowProfile: FC<ProfileProps> = (props): JSX.Element => {
    return(
        <div className="profile-wrapper">
        <p>SHOW PROFILE COMPONENT</p>
        </div>
    )
}

export default ShowProfile;