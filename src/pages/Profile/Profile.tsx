import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import { useParams } from "react-router-dom";
import './Profile.css';

const Profile = () => {
    let params = useParams();
    return (
        <>
        <TopNav />
        <SideNav />
        <p>{params.id}</p>
        </>
    )
}

export default Profile;