import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";


const Messages = () => {
    const allowSideBar = useSelector((state: RootState) => state.sideNavStatus.expanded)
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
    return (
        <>
            <TopNav />
            <SideNav />
            <div className={`content-wrapper ${classStr}`}>
                <p>MESSAGES CONTENT</p>
            </div>
        </>
    )
}

export default Messages;