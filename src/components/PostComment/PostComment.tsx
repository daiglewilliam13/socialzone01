
import React, {useState, useEffect} from "react";
import './postcomment.css';
interface CommentProps {
    commentId: string,
}
const PostComment: React.FC<CommentProps> = props => {
    const [text, setText] = useState<string>('')
    const [name, setName] = useState<string>('');
    const [datePosted, setDatePosted] = useState<string>('');

    const url = "http://localhost:8080/v1/comments/";
    const getPostText = async () => {
        const result = await fetch(url+props.commentId, {
            method: 'GET',
            mode: 'cors'
        }).then((res)=>{ 
            return res.json()
        })
        console.log(result)
        setDatePosted(result.data.created)
        setText(result.data.text)
        setName(result.data.username)
    }
    useEffect(()=>{getPostText()}, [])
    return(
        <div className="comment-reply-wrapper">
            <p>By {name} on {datePosted}</p>
            <p>{text}</p>
        </div>
    )
}

export default PostComment;