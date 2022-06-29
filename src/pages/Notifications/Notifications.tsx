import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";



const Notifications = () => {
    const userInfo = useSelector((state:RootState)=>state.authStatus.auth.user)
    const getNotifications = async () =>{
        const url = "http://localhost:8080/v1/notifications/"+userInfo.id;
        const response = await fetch(url,{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(await response.json())
    }
    const allowSideBar = useSelector((state: RootState) => state.sideNavStatus.expanded)
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
    useEffect(()=>{
        getNotifications();
    })
    return (
        <>
            <TopNav />
            <SideNav />
            <div className={`content-wrapper ${classStr}`}>
                <p>NOTIFICATIONS CONTENT</p>
            </div>
        </>
    )
}

export default Notifications    ;