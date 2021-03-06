import React, { FC, useState, useEffect } from "react";
import './Reply.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import PostComment from '../PostComment/PostComment';
interface ReplyProps {
    authorId: string,
    parentId: string
}
const Reply: FC<ReplyProps> = (props): JSX.Element => {
    const [expandComments, setExpandComments] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [replyText, setReplyText] = useState<any>('')
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [comments, setComments] = useState<any>([])
    const [likeStatus, setLikeStatus] = useState<string>('none')
    const showComments = () => {
        setExpandComments(expandComments => !expandComments)
    }
    let commentsClassStr = expandComments ? "expanded" : "collapsed";
    const token = useSelector((state:RootState)=> state.authStatus.auth.tokens.access)
    const userInfo = useSelector((state: RootState) => state.authStatus.auth.user)
    const url = 'http://localhost:8080/v1';
    const addLike = async () => {
        const userId = {
            id: userInfo.id
        }
        const result = await fetch(url + "/posts/" + props.parentId + "/like", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)
        })
        const data = await result.json()
        refreshComments();
        return data;
    }
    const addDislike = async () => {
        const userId = {
            id: userInfo.id
        }
        const result = await fetch(url + "/posts/" + props.parentId + "/dislike", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)
        })
        const data = await result.json()
        refreshComments();
        return data;
    }
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
    const refreshComments = () => {
        getComments().then((res) => {
            if (res.likedBy.includes(userInfo.id)) {
                setLikeStatus('liked')
            } else if (res.dislikedBy.includes(userInfo.id)) {
                setLikeStatus('disliked')
            } else {
                setLikeStatus('none')
            }
            setComments(res.comments);
            setLikes(res.likes)
            setDislikes(res.dislikes)
            setIsLoading(false)
        })
    }
    const submitComment = async () => {
        if (replyText == '') {
            alert('type a reply')
        } else {
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
            console.log(response)
            sendNotification("Post", response.id);
            refreshComments();
            setReplyText('')
        }
    }
    const sendNotification = async (event: string, id: string) =>{
        const notificationObj= {
            eventType: event,
            recipient: props.authorId,
            sender: userInfo.id,
            eventLink: props.parentId,
            read: false
        }
        const response = await fetch(url+'/notifications', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(notificationObj)
        })
        console.log(await response.json())
    }
    const handleLike = (direction: string) => {
        setIsLoading(true)
        if (direction == 'up') {
            if (likeStatus === 'liked' || likeStatus === 'none') {
                addLike()
                    .then(() => setIsLoading(false));
            } else {
                addDislike()
                .then((res) => {
                    addLike()
                        .then(() => setIsLoading(false));
                })
            }
        } else {
            if (likeStatus === 'disliked' || likeStatus === 'none') {
                addDislike()
                    .then(() => setIsLoading(false));;
            } else {
                addLike().then((res) => {
                    addDislike()
                        .then(() => setIsLoading(false));
                });
            }
        }

    }

    const commentArray = comments.map((id: string) => {
        return (
            <PostComment commentId={id} />
        )
    })
    useEffect(() => {
        refreshComments();
    }, [])
    return (
        <>
            <div className="reply-input-wrapper">
                <textarea value={replyText} placeholder="Type your reply here..." className="post-reply" onChange={(e) => setReplyText(e.target.value)}></textarea>
                <button className="post-reply-submit" onClick={submitComment}>Reply</button>
                <div className="engagement-wrapper">
                    {isLoading ?
                        <div className="vote-wrapper">
                            <BiUpArrow className="vote-icon" />...<BiDownArrow className="vote-icon" />...
                        </div>
                        :<div className="vote-wrapper">
                            <BiUpArrow className="vote-icon" onClick={() => { handleLike('up') }} />{likes} <BiDownArrow className="vote-icon" onClick={() => { handleLike('down') }} />{dislikes}
                        </div>

                    }
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