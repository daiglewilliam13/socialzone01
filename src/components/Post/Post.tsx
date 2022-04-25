import React from "react";
import {useState} from 'react';
import profilePicture from '../../images/jane-doe.jpg';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import './post.css';
import PostComment from '../PostComment/PostComment';
import Reply from '../Reply/Reply';

const postObject = {
    author: "Jane Doe",
    date: "Sat, Jun 11 @ 11:35am",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere tempora culpa rem veniam a voluptatibus dolorem praesentium minima? Omnis nulla odio reprehenderit? Deserunt reiciendis fuga totam, atque molestiae omnis fugiat!",
    comments: [{
        authorId: 23,
        date: "Sat, Jun 11th @ 11:34am",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }, 
    {
            authorId: 23,
            date: "Sat, Jun 11th @ 11:34am",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            authorId: 23,
            date: "Sat, Jun 11th @ 11:34am",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            authorId: 23,
            date: "Sat, Jun 11th @ 11:34am",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            authorId: 23,
            date: "Sat, Jun 11th @ 11:34am",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }],
    likes: 35,
    likedBy: [12, 234, 23, 123],
    dislikes: 3,
    dislikedBy: [25, 2, 14]
}

const Post = () => {
    const [expandComments, setExpandComments] = useState(false);
    const showComments = () => {
        setExpandComments(expandComments=> !expandComments)
    }
    let commentsClassStr = expandComments ? "expanded" : "collapsed";
    return (
        <div className="post-wrapper">
            <div className="profile-image">
                <img alt-text="jane doe" src={profilePicture} />
            </div>
            <div className="content-heading-wrapper">
                <h2>{postObject.author}</h2>
                <p className="heading-date">on {postObject.date}</p>
            </div>
            <div className="content">

                <div className="content-body-wrapper">
                    <p>{postObject.body}</p>
                </div>
                <div className="reply-wrapper">
                    <Reply />
                </div>
                <div className="engagement-wrapper">
                    <div className="vote-wrapper">
                        <BiUpArrow className="vote-icon" />{postObject.likes} : <BiDownArrow className="vote-icon" />{postObject.dislikes}
                    </div>
                    <div className="comments-numbers">{postObject.comments.length} Comments<button onClick={showComments}className="show-comments">{expandComments? "hide" : "show"}</button></div>
                </div>
            </div>
            <div className={`comments-wrapper ${commentsClassStr}`}>
                {postObject.comments.map((comment) => {
                    return (
                        <PostComment comment={comment} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Post;