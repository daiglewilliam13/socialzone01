import React, { FC, useState, useEffect } from "react";
import './showprofile.css';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import img from '../../images/john-doe.jpg';
import './showprofile.css';
import Post from '../Post/Post';

interface ProfileProps {
    id: string
}

const initialUserState = {
    role: "",
    isEmailVerified: false,
    email: "",
    name: "",
    timelinePosts: [],
    timelineComments: [],
    id: ""

}
const initialPostState = [{
    id: "",
    authorId: "string,",
    authorName: "string,",
    body: "string,",
    comments: ["string"],
    created: "date",
    likes: 2,
    dislikes: 0,
    likedBy: ["string"],
    dislikedBy: ["string"], }] || null;

const getUser = async (id: string, token: string) => {
    const response = await fetch('http://localhost:8080/v1/users/' + id, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });
    return (await response.json());
}

const getPosts = async (id: string) => {
    const response = await fetch('http://localhost:8080/v1/posts/author/' + id, {
        method: 'GET',
        mode: 'cors',
    })
    return (await response.json());
}


const ShowProfile: FC<ProfileProps> = (props): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true)
    const [userInfo, setUserInfo] = useState(initialUserState)
    const [posts, setPosts] = useState(initialPostState)
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)
    const postArray = posts.map((currentPost)=>{
        return(
            <Post post={currentPost}/>
        )
    })

    const follow = async () => {
        const response = await fetch(`http://localhost:8080/v1/users/${userInfo.id}/follow`,{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.json();
    }
    useEffect(() => {
        getPosts(props.id).then((res) => {
            setPosts(res);
            setIsLoading(false)
        })
        getUser(props.id, token).then((res) => { setUserInfo(res)})
    }, [])
    return (
        <>
            <div className="profile-wrapper">
                <div className="profile-header">
                    <img className="profile-header-img" src={img}></img>
                    <p>{userInfo.name}</p>
                    <p>{postArray.length} posts</p>
                    <p>{userInfo.isEmailVerified ? "Verified" : "Not Verified"} </p>
                    <button onClick={()=>{follow().then((res)=>console.log(res))}}>Follow</button>
                    <button>Message</button>
                    <button>Block</button>
                </div>
                <div className="timeline-wrapper">
                    <h3>Posts by {userInfo.name}</h3><hr></hr>
                </div>
                <div> 
                    {isLoading ? "Fetching Posts..." : postArray}
                </div>
            </div>
        </>
    )
}

export default ShowProfile;