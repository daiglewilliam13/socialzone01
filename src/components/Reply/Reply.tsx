import React, {FC} from "react";
import './Reply.css';

interface ReplyProps {
    id: string,
}
//get id of post
//post comment text to route with id
//route will run callback that saves new comments
//inject returned comment id into the comments array of the parent post
//re-render comments section 
const Reply: FC<ReplyProps> = (props): JSX.Element =>{

    return(
        <div className="reply-input-wrapper">
        <textarea placeholder="Type your reply here..."className="post-reply"></textarea>
        <button className="post-reply-submit">Reply</button>
        </div>
    )
}

export default Reply;