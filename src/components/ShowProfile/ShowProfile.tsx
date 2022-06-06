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
    console.log(token)
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
const ShowProfile: FC<ProfileProps> = (props): JSX.Element => {
    const [userInfo, setUser] = useState(initialState)
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)
    useEffect(() => {
        getUser(props.id, token).then((res) => { setUser(res) })
    }, [props])
    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <img className="profile-header-img" src={img}></img>
                <p>{userInfo.name}</p>
                <p>{userInfo.timelinePosts.length} posts</p>
                <p>{userInfo.timelineComments.length} comments</p>
            </div>
            <div className="timeline-wrapper">
            </div>
        </div>
    )
}

export default ShowProfile;