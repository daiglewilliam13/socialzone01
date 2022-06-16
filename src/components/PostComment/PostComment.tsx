import React from "react";
import './postcomment.css';
interface CommentProps {
    commentId: string,
}
const PostComment: React.FC<CommentProps> = props => {

    return(
        <div className="comment-reply-wrapper">
            <p>{props.commentId}</p>
        </div>
    )
}

export default PostComment;