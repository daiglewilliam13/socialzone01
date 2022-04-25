import React from "react";
import './feed.css';
import Post from '../Post/Post';

const Feed = () => {

    return (
        <>
            <div id="main-feed-wrapper">
                <div id="border-wrapper">
                    <h1>Live Feed</h1><div id="border-line"></div>
                </div>
                <div className="feed-posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                </div>
            </div>
        </>
    )
}

export default Feed;