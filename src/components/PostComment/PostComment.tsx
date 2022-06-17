
import React, {useState, useEffect} from "react";
import './postcomment.css';
interface CommentProps {
    commentId: string,
}
const PostComment: React.FC<CommentProps> = props => {
    const [text, setText] = useState<any>('')
    const url = "http://localhost:8080/v1/comments/";
    const postText = async () => {
        const result = fetch(url+props.commentId, {
            method: 'GET',
            mode: 'cors'
        }).then((res)=>{return res.json()})
        console.log(result)
    }
    useEffect(()=>{postText()}, [])
    return(
        <div className="comment-reply-wrapper">
            <p>{text}</p>
        </div>
    )
}

export default PostComment;