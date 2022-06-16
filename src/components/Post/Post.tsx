import React, { FC } from "react";
import { useState } from 'react';
import profilePicture from '../../images/jane-doe.jpg';

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
        </div>
        </div>
    </>
    )
}

export default Post;