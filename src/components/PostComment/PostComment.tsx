import React from "react";

interface CommentProps {
    comment:{
        authorId: number,
        date: string,
        text: string
    } 

}
const PostComment: React.FC<CommentProps> = props => {

    return(
        <div className="comment-reply-wrapper">
        <p>By {props.comment.authorId} on {props.comment.date}</p>
        <p>{props.comment.text}</p>
        </div>
    )
}

export default PostComment;