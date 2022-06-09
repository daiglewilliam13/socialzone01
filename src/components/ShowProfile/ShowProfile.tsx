import React, { FC, useState, useEffect } from "react";
import './showprofile.css';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import img from '../../images/john-doe.jpg';
import './showprofile.css';

interface ProfileProps {
    id: string
}

const initialState = {
    role: "",
    isEmailVerified: false,
    email: "",
    name: "",
    timelinePosts: [],
    timelineComments: []

}

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

const getPosts = async (id: string) =>{
    const response = await fetch('http://localhost:8080/v1/posts/author/'+ id,{
        method: 'GET',
        mode: 'cors',
    })
    return (await response.json());
}
const ShowProfile: FC<ProfileProps> = (props): JSX.Element => {
    const [userInfo, setUser] = useState(initialState)
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)
    useEffect(() => {
        getPosts(props.id).then((res)=>console.log(res))
        getUser(props.id, token).then((res) => { setUser(res) })
    }, [props])
    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <img className="profile-header-img" src={img}></img>
                <p>{userInfo.name}</p>
                <p>{userInfo.timelinePosts.length} posts</p>
                <p>{userInfo.timelineComments.length} comments</p>
                <p>{userInfo.isEmailVerified ? "Verified" : "Not Verified"} </p>
                <button>Add to Friends</button>
                <button>Message</button>
                <button>Block</button>
            </div>
            <div className="timeline-wrapper">
                <h3>Posts by {userInfo.name}</h3><hr></hr>
            </div>
        </div>
    )
}

export default ShowProfile;