import React from "react";
import './feed.css';
import Post from '../Post/Post';

const Feed = () => {

    return(
        <>
        <div id="main-feed-wrapper">
            <div id="border-wrapper">
            <h1>Latest Feed</h1><div id="border-line"></div>
            </div>
        <Post />
        </div>
        </>
    )
}

export default Feed;