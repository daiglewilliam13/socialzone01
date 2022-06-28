import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import UserDisplayCard from '../../components/UserDisplayCard/UserDisplayCard';


const Friends = () => {
    const allowSideBar = useSelector((state: RootState) => state.sideNavStatus.expanded)
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
    return (
        <>
            <TopNav />
            <SideNav />
            <div className={`content-wrapper ${classStr}`}>
                <div>
                    Find Users: <input type="text" placeholder="type name here"></input>
                </div>
                <div>
                    <p>Followers:</p>
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                </div>
                <div>
                    <p>Following:</p>
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />
                    <UserDisplayCard />

                </div>
            </div>
        </>
    )
}

export default Friends;