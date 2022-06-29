
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './postcomment.css';
interface CommentProps {
    commentId: string,
}
const PostComment: React.FC<CommentProps> = props => {
    const [text, setText] = useState<string>('')
    const [name, setName] = useState<string>('');
    const [userId, setUserId] = useState<string>('')
    const [datePosted, setDatePosted] = useState<string>('');

    const url = "http://localhost:8080/v1/comments/";
    const getPostText = async () => {
        const result = await fetch(url+props.commentId, {
            method: 'GET',
            mode: 'cors'
        })
        return result.json()

    }
    useEffect(()=>{getPostText().then((result)=>{
        setDatePosted(result.data.created)
        setText(result.data.text)
        setName(result.data.username)
        setUserId(result.data.userId)
        console.log(result)
    })}, [])
    return(
        <div className="comment-reply-wrapper">
            <Link to={`/profile/${userId}`}> <p>By {name} on {datePosted}</p></Link>
            <p>{text}</p>
        </div>
    )
}

export default PostComment;