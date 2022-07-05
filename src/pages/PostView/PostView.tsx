import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import Post from "../../components/Post/Post";

const initialPostState = {
    id: "",
    authorId: "",
    authorName: "",
    body: "",
    comments:[""],
    created: "",
    likes: 0,
    dislikes: 0,
    likedBy: [""],
    dislikedBy: [""],
}
const PostView = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState(initialPostState)
    const allowSideBar = useSelector((state: RootState) =>
        state.sideNavStatus.expanded);
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
    const getPost = async ()=>{
        const url = "http://localhost:8080/v1/posts/"+params.id;
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response.json();
    }
    const postContent = isLoading ? <p>Fetching Post...</p> : <Post post={post} /> 
    useEffect(()=>{
        getPost()
        .then((res)=>{setPost(res); setIsLoading(false)})
    },[])
    return (
        <>
            {console.log(post)}
            <TopNav />
            <SideNav />
            <div className={`content-wrapper ${classStr}`}>
                {postContent}
            </div>
        </>
    )
}

export default PostView;