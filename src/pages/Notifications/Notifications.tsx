import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import NotificationCard from "../../components/NotificationCard/NotificationCard";


const Notifications = () => {
    const [notifications, setNotifications] = useState([])
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
       return response.json();
    }
    const allowSideBar = useSelector((state: RootState) => state.sideNavStatus.expanded)
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
    const notificationsArray = notifications.map((notice)=>{
        return(
            <NotificationCard notice={notice} />
        )
    })
    useEffect(()=>{
        getNotifications()
        .then((data)=>setNotifications(data));
    },[])
    return (
        <>
            <TopNav />
            <SideNav />
            <div className={`content-wrapper ${classStr}`}>
                {notificationsArray}
            </div>
        </>
    )
}

export default Notifications    ;