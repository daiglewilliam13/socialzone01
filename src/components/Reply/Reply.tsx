import React, {FC, useState} from "react";
import './Reply.css';
import {useSelector} from 'react-redux';
import { RootState } from '../../app/store';

interface ReplyProps {
    parentId: string
}
//get id of post
//post comment text to route with id
//route will run callback that saves new comments
//inject returned comment id into the comments array of the parent post
//re-render comments section 
const Reply: FC<ReplyProps> = (props): JSX.Element =>{
    const [replyText, setReplyText] = useState('')
    const userInfo = useSelector((state: RootState)=>state.authStatus.auth.user)
    const submitComment = async () => {
        const url = 'http://localhost:8080/v1/comments';
        const commentData = {
            authorName: userInfo.name,
            authorId: userInfo.id,
            text: replyText,
            replyTo: props.parentId
        }
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData)
        });
        console.log(response);
        setReplyText('')
    }
    return(
        <div className="reply-input-wrapper">
        <textarea value={replyText} placeholder="Type your reply here..." className="post-reply" onChange={(e)=> setReplyText(e.target.value)}></textarea>
        <button className="post-reply-submit" onClick={submitComment}>Reply</button>
        </div>
    )
}

export default Reply;