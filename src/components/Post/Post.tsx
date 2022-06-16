import React, { FC } from "react";
import { useState } from 'react';
import profilePicture from '../../images/jane-doe.jpg';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import './post.css';
import PostComment from '../PostComment/PostComment';
import Reply from '../Reply/Reply';

interface PostProps {
    post: {
        id: string,
        authorId: string,
        authorName: string,
        body: string,
        comments: string[],
        created: string,
        likes: number,
        dislikes: number,
        likedBy: string[],
        dislikedBy: string[],
    }
}
const Post: FC<PostProps> = (props): JSX.Element => {

    const postObject = props.post
    const [expandComments, setExpandComments] = useState(false);
    const showComments = () => {
        setExpandComments(expandComments => !expandComments)
    }
    let commentsClassStr = expandComments ? "expanded" : "collapsed";
    return (
        <>
        <div className="post-wrapper">
            <div className="profile-image">
                <img alt-text="jane doe" src={profilePicture} />
            </div>
            <div className="content-heading-wrapper">
                <h2>{postObject.authorName}</h2>
                <p className="heading-date">on {postObject.created}</p>
            </div>
            <div className="content">

                <div className="content-body-wrapper">
                    <p>{postObject.body}</p>
                </div>
                <div className="reply-wrapper">
                    <Reply parentId={props.post.id}/>
                </div>
                <div className="engagement-wrapper">
                    <div className="vote-wrapper">
                        <BiUpArrow className="vote-icon" />{postObject.likes} : <BiDownArrow className="vote-icon" />{postObject.dislikes}
                    </div>
                    <div className="comments-numbers">{postObject.comments.length} Comments<button onClick={showComments} className="show-comments">{expandComments ? "hide" : "show"}</button></div>
                </div>
            </div>
            <div className={`comments-wrapper ${commentsClassStr}`}>
                {postObject.comments.map((commentId) => {
                    return (
                        <PostComment commentId={commentId} />
                        )
                    })
                }
            </div>
        </div>
    </>
    )
}

export default Post;