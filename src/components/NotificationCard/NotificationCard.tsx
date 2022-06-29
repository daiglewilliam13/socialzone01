import React, { FC, useState, useEffect } from "react";
import './Reply.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface NotificationCardProps {
    createdAt: string,
    eventLink: string,
    eventType: string,
    read: boolean,
    recipient: string,
    sender: string,
    id: string,
}
const NotificationCard: FC<NotificationCardProps> = props =>{

    return(
        <p>CARD COMPONENT</p>
    )
}

export default NotificationCard;