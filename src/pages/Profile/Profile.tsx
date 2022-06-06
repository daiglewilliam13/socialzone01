import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import { useParams } from "react-router-dom";
import './Profile.css';
import ShowProfile from '../../components/ShowProfile/ShowProfile';

const Profile = () => {
    let params = useParams();
    let id=params.id || "";
    return (
        <>
        <TopNav />
        <SideNav />
        <ShowProfile id={id}/>
        </>
    )
}

export default Profile;