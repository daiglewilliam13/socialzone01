import React from "react";
import './reply.css';

const Reply = () =>{

    return(
        <div className="reply-input-wrapper">
        <textarea placeholder="Type your reply here..."className="post-reply"></textarea>
        <button className="post-reply-submit">Reply</button>
        </div>
    )
}

export default Reply;