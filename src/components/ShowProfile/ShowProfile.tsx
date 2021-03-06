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

const initialProfileState = {
    role: "",
    isEmailVerified: false,
    email: "",
    name: "",
    timelinePosts: [""],
    timelineComments: [""],
    id: "",
    followers:[""],
    following:[""],
    createdAt:"",
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
    const [profileInfo, setProfileInfo] = useState(initialProfileState)
    const [posts, setPosts] = useState(initialPostState)
    const [followStatus, setFollowStatus] = useState(false)
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)
    const myUserId = {id: useSelector((state:RootState)=>state.authStatus.auth.user.id) || ''} 
    const postArray = posts.map((currentPost)=>{
        return(
            <Post post={currentPost}/>
        )
    })
    
    const follow = async () => {
        let URL = `http://localhost:8080/v1/users/${profileInfo.id}/${followStatus ? 'un' : ''}follow`;
        const response = await fetch(URL,{ //the user you want to (un)follow
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myUserId) //logged in user Id initiating the (un)follow
        })
        if(!followStatus){
            sendNotification('User', props.id);
        }
        return response.json();
    }
    const sendNotification = async (event: string, id: string) => {
        console.log(props)
        const notificationObj = {
            eventType: event,
            recipient: props.id,
            sender: myUserId.id,
            eventLink: myUserId.id,
            read: false
        }
        const response = await fetch('http://localhost:8080/v1/notifications/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(notificationObj)
        })
        console.log(await response.json())
    }
    const retUser = () => {
        getUser(props.id, token).then((res) => {
            setProfileInfo(res)
            if (res.followers.includes(myUserId.id)) {
                setFollowStatus(true)
            } else {
                setFollowStatus(false)
            }
        })
    }
    const retrievePosts = () =>{
        getPosts(props.id).then((res) => {
            setPosts(res);
            setIsLoading(false)
        })
    }
    useEffect(() => {
        setIsLoading(true)
        retrievePosts();
        retUser();
    }, [props.id])
    return (
        <>
            <div className="profile-wrapper">
                <div className="profile-header">
                    <img className="profile-header-img" src={img}></img>
                    <p>{profileInfo.name} </p>
                    <p>{postArray.length} posts </p>
                    <p>{profileInfo.isEmailVerified ? "Verified" : "Not Verified"} </p>
                    <button onClick={()=>follow().then((res)=>{console.log(res);retUser()})}>{followStatus ? "Unfollow" : "Follow"}</button>
                    <button>Message</button>
                    <button>Block</button>
                </div>
                <div className="timeline-wrapper">
                    <h3>Posts by {profileInfo.name}</h3><hr></hr>
                </div>
                <div> 
                    {isLoading ? "Fetching Posts..." : postArray}
                </div>
            </div>
        </>
    )
}

export default ShowProfile;