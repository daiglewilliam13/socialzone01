import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import { useParams } from "react-router-dom";
import './Profile.css';
import ShowProfile from '../../components/ShowProfile/ShowProfile';
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Profile = () => {
    let params = useParams();
    let id = params.id || "";
    const allowSideBar = useSelector((state: RootState)=>state.sideNavStatus.expanded)
    let classStr = allowSideBar=='true' ? 'allow-sidebar' : '';
    return (
        <>
            <TopNav />
            <SideNav />
            <div className={`content-wrapper ${classStr}`}>
                <ShowProfile id={id} />
            </div>
        </>
    )
}

export default Profile;