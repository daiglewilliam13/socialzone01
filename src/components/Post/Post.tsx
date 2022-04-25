import React from "react";
import profilePicture from '../../images/jane-doe.jpg';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import './post.css';
import PostComment from '../PostComment/PostComment';
import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";

const postObject = {
    author: "Jane Doe",
    date: "Sat, Jun 11 @ 11:35am",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere tempora culpa rem veniam a voluptatibus dolorem praesentium minima? Omnis nulla odio reprehenderit? Deserunt reiciendis fuga totam, atque molestiae omnis fugiat!",
    comments: ["1", "2", "3", "4"],
    likes: 35,
    likedBy: [12, 234, 23, 123],
    dislikes: 3,
    dislikedBy: [25, 2, 14]
}


const Post = () => {

    return (
        <div className="post-wrapper">
            <div className="profile-image">
                <img src={profilePicture} />
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
                    <p>REPLY COMPONENT</p>
                </div>
                <div className="engagement-wrapper">
                    <div className="vote-wrapper">
                        <BiUpArrow className="vote-icon" />{postObject.likes} : <BiDownArrow className="vote-icon" />{postObject.dislikes}
                    </div>
                    <div className="comments-numbers">{postObject.comments.length} Comments<button className="show-comments-button">(show)</button></div>
                </div>
            </div>
            <div className="comments-wrapper">
                {postObject.comments.map((comment: string) => {
                    return (
                        <p>{comment}</p>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Post;