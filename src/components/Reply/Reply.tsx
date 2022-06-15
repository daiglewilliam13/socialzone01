import React, {FC} from "react";
import './Reply.css';

interface ReplyProps {
    id: number,
}

const Reply: FC<ReplyProps> = (props): JSX.Element =>{

    return(
        <div className="reply-input-wrapper">
        <textarea placeholder="Type your reply here..."className="post-reply"></textarea>
        <button className="post-reply-submit">Reply</button>
        </div>
    )
}

export default Reply;