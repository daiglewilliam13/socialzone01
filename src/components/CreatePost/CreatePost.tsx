import React, {FC} from 'react';
import './createpost.css';

interface CreateProps {
    id: string
}

const CreatePost: FC<CreateProps> = (props): JSX.Element => {
    
    return(
        <div id="create-post-wrapper">
            <p>What's on your mind?</p>
            <div className="create-post-input-wrapper">
                <textarea name="" id="" placeholder='Tell us something about your day...'></textarea>
                <button id="create-post-submit">Post Update</button>
            </div>
        </div>
    )
}

export default CreatePost;