import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";


const PostView = () => {
    const allowSideBar = useSelector((state: RootState) =>
        state.sideNavStatus.expanded);
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
    return (
        <>
            <TopNav />
            <SideNav />
            <div className={`content-wrapper ${classStr}`}>
                <p>POST VIEW PAGE</p>
            </div>
        </>
    )
}