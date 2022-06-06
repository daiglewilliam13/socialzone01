import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import { useParams } from "react-router-dom";
import './Profile.css';
import ShowProfile from '../../components/ShowProfile/ShowProfile';

const Profile = () => {
    let params = useParams();
    return (
        <>
        <TopNav />
        <SideNav />
        <ShowProfile />
        </>
    )
}

export default Profile;