import React, { FC, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from '../../app/store';
import './notificationcard.css';
import { FaExclamationTriangle } from "react-icons/fa";
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
    const [isLoading, setIsLoading] = useState(true);
    const [senderName, setSenderName] = useState('');
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)
    const getSenderName = async (id: string) => {
        const response = await fetch('http://localhost:8080/v1/users/' + id, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        return response.json();
    }
    let eventStr, urlSegment;
    if (props.notice.eventType == 'Post') {
        eventStr = "post comment by " + senderName;
        urlSegment = 'post';
    } else if (props.notice.eventType == 'User') {
        eventStr = "follower: " + senderName;
        urlSegment = 'profile'
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
    const dateStr = new Date(props.notice.createdAt).toDateString();
    useEffect(() => {
        getSenderName(props.notice.sender)
            .then((data) => {
                setSenderName(data.name)
                setIsLoading(false);
            })
    }, [])
    if (isLoading) {
        return (
            <p className="notice-card-wrapper">Retrieving details...</p>
        )
    } else {
        return (
            <>
                <div className={`notice-card-wrapper ${props.notice.read}`} >
                    <FaExclamationTriangle className={`notice-icon ${props.notice.read}`}/>
                        <Link className={`link-text ${props.notice.read}`} to={`/${urlSegment}/${props.notice.eventLink}`}>
                            New {eventStr}
                        </Link>
                    <p className="date">on {dateStr}</p>
                </div>
            </>
        )
    }
}

export default NotificationCard;