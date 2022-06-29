import React, { FC, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from '../../app/store';

interface NoticeProps {
    notice:{
        createdAt: string,
        eventLink: string,
        eventType: string,
        read: boolean,
        recipient: string,
        sender: string,
        id: string,
    }
}
const NotificationCard: FC<NoticeProps> = props =>{

    return(
        <>
            <p><Link to={props.notice.eventLink}>New {props.notice.eventType}!</Link></p>
        <p></p>
        </>
    )
}

export default NotificationCard;