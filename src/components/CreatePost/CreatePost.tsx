import React, { FC } from 'react';
import { useState } from 'react';
import './createpost.css';

interface CreateProps {
    user: {
        id: string,
        name: string,
    }
}

const CreatePost: FC<CreateProps> = (props): JSX.Element => {
    const [postText, setPostText] = useState('');
    const publishPost = async () =>{
        const url = "http://localhost:8080/v1/posts";
        const postObject = {
            body: postText,
            authorId: props.user.id,
            authorName: props.user.name
        }
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postObject)
        });
        setPostText('')
        console.log(response)
    }
    return (
        <div id="create-post-wrapper">
            <p>What's on your mind, {props.user.name}?</p>
            <div className="create-post-input-wrapper">
                <textarea value={postText} name="" id="" placeholder='Tell us something about your day...' onChange={(e)=>{setPostText(e.target.value)}}></textarea>
                <button id="create-post-submit" onClick={publishPost}>Post Update</button>
            </div>
        </div>
    )
}

export default CreatePost;