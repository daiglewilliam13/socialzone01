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
        console.log(postText)
    }
    return (
        <div id="create-post-wrapper">
            <p>What's on your mind, {props.user.name}?</p>
            <div className="create-post-input-wrapper">
                <textarea name="" id="" placeholder='Tell us something about your day...' onChange={(e)=>{setPostText(e.target.value)}}></textarea>
                <button id="create-post-submit" onClick={publishPost}>Post Update</button>
            </div>
        </div>
    )
}

export default CreatePost;