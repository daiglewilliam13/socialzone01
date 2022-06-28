import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import UserDisplayCard from '../../components/UserDisplayCard/UserDisplayCard';


const Friends = () => {
    const followers = useSelector((state: RootState)=>
        state.authStatus.auth.user.followers);
    const following = useSelector((state: RootState) =>
        state.authStatus.auth.user.following);
    const allowSideBar = useSelector((state: RootState) => 
        state.sideNavStatus.expanded);
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';

    const followerArray = followers.map((followerId)=>{
        return(
            <UserDisplayCard id={followerId} />
        )
    })
    const followingArray = following.map((followerId) => {
        return (
            <UserDisplayCard id={followerId} />
        )
    })
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
                    {followerArray}
                </div>
                <div>
                    <p>Following:</p>
                    {followingArray}
                </div>
            </div>
        </>
    )
}

export default Friends;