import React, { FC, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from '../../app/store';

interface NoticeProps {
    notice: {
        createdAt: string,
        eventLink: string,
        eventType: string,
        read: boolean,
        recipient: string,
        sender: string,
        _id: string,
    }
}
const NotificationCard: FC<NoticeProps> = (props): JSX.Element => {
    let eventStr;
    if (props.notice.eventType == 'Post') {
        eventStr = "post comment!";
    } else if (props.notice.eventType == 'User') {
        eventStr = "follower!";
    } else {
        eventStr = "";
    }

    const markRead = async () => {
        const url = 'http://localhost:8080/v1/notifications/read/' + props.notice._id;
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(await response.json())
    }
    return (
        <>
            <p onClick={markRead}><Link to={`/post/${props.notice.eventLink}`}>New {eventStr}</Link></p>
            <p></p>
        </>
    )
}

export default NotificationCard;