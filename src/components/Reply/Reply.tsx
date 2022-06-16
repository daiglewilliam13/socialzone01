import React, { FC, useState, useEffect } from "react";
import './Reply.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
interface ReplyProps {
    parentId: string
}
const Reply: FC<ReplyProps> = (props): JSX.Element => {
    const [expandComments, setExpandComments] = useState(false);
    const showComments = () => {
        setExpandComments(expandComments => !expandComments)
    }
    let commentsClassStr = expandComments ? "expanded" : "collapsed";
    const [replyText, setReplyText] = useState<any>('')
    const [likes, setLikes] = useState<Number>(0)
    const [dislikes, setDislikes] = useState<Number>(0)
    const [comments, setComments] = useState<any>([])
    const userInfo = useSelector((state: RootState) => state.authStatus.auth.user)
    const url = 'http://localhost:8080/v1/posts/';
    const getComments = async () => {
        const result = await fetch(url + props.parentId, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => { return res.json() })
        setComments(result.data.comments)
    }
    const submitComment = async () => {
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
        setReplyText('')
        getComments();
        console.log(comments)
    }
    const commentArray = comments.map((text: string) => {
        return (
            <p>{text}</p>
        )
    })
    return (
        <>
            <div className="reply-input-wrapper">
                <textarea value={replyText} placeholder="Type your reply here..." className="post-reply" onChange={(e) => setReplyText(e.target.value)}></textarea>
                <button className="post-reply-submit" onClick={submitComment}>Reply</button>
                <div className="engagement-wrapper">
                    <div className="vote-wrapper">
                        <BiUpArrow className="vote-icon" />: <BiDownArrow className="vote-icon" />
                    </div>
                    <div className="comments-numbers">{comments.length} Comments<button onClick={showComments} className="show-comments">{expandComments ? "hide" : "show"}</button></div>
                </div>
            </div>
            <div className={`comments-wrapper ${commentsClassStr}`}>
                {commentArray}
            </div>
        </>
    )
}

export default Reply;