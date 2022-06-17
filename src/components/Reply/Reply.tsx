import React, { FC, useState, useEffect } from "react";
import './Reply.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import PostComment from '../PostComment/PostComment';
interface ReplyProps {
    parentId: string
}
const Reply: FC<ReplyProps> = (props): JSX.Element => {
    const [expandComments, setExpandComments] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [replyText, setReplyText] = useState<any>('')
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [comments, setComments] = useState<any>([])
    const showComments = () => {
        setExpandComments(expandComments => !expandComments)
    }
    let commentsClassStr = expandComments ? "expanded" : "collapsed";
    const userInfo = useSelector((state: RootState) => state.authStatus.auth.user)
    console.log(userInfo)
    const url = 'http://localhost:8080/v1';
    const getComments = async () => {
        try {
            const result = await fetch(url + "/posts/" + props.parentId, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await result.json();
            return data;
        } catch (err) {
            console.log(err)
        }
    }
    const refreshComments = () =>{
        getComments().then((res) => {
            setComments(res.data.comments);
            setLikes(res.data.likes)
            setDislikes(res.data.dislikes)
        })
    }
    const submitComment = async () => {
        setIsLoading(true)
        const commentData = {
            username: userInfo.name,
            userId: userInfo.id,
            text: replyText,
            replyTo: props.parentId
        }
        const response = await fetch(url + '/comments', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData)
        }).then((res) => {
            return res.json()
        });
        refreshComments();
        setReplyText('')

    }

    const commentArray = comments.map((id: string) => {
        return (
            <PostComment commentId={id} />
        )
    })
    useEffect(()=> {
        refreshComments();
    }, [])
    return (
        <>
            <div className="reply-input-wrapper">
                <textarea value={replyText} placeholder="Type your reply here..." className="post-reply" onChange={(e) => setReplyText(e.target.value)}></textarea>
                <button className="post-reply-submit" onClick={submitComment}>Reply</button>
                <div className="engagement-wrapper">
                    <div className="vote-wrapper">
                        <BiUpArrow className="vote-icon" />{likes} <BiDownArrow className="vote-icon" />{dislikes}
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