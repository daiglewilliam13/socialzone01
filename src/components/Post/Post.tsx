import React from "react";
import profilePicture from '../../images/jane-doe.jpg';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import './post.css';

const postObject = {
    author: "Jane Doe",
    date: "Sat, Jun 11 @ 11:35am",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere tempora culpa rem veniam a voluptatibus dolorem praesentium minima? Omnis nulla odio reprehenderit? Deserunt reiciendis fuga totam, atque molestiae omnis fugiat!",
    comments: ["1", "2", "3", "4"],
    likes: 35,
    likedBy: [12,234,23,123],
    dislikes: 3,
    dislikedBy: [25,2,14]
}


const Post = () => {

    return (
        <div className="post-wrapper">
            <div className="profile-image">
                <img src={profilePicture} />
            </div>
            <div className="content">
                <div className="content-heading-wrapper">
                    <h2>Jane Doe</h2>
                    <p>on Sat, Jun 11 @ 11:35am</p>
                </div>
                <div className="content-body-wrapper">
                    <p></p>
                </div>
                <div className="reply-wrapper">
                    <p>REPLY COMPONENT</p>
                </div>
                <div className="engagement-wrapper">
                    <p>
                        <BiDownArrow className="vote-icon" />23 : <BiUpArrow className="vote-icon" />2
                    </p>
                    <p>14 Comments <button className="show-comments-button">(show)</button></p>
                </div>
            </div>
        </div>
    )
}

export default Post;