import React, { FC, useState, useEffect } from "react";
import './showprofile.css';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";


interface ProfileProps {
    id: string
}

const initialState = {
    role: "",
    isEmailVerified: false,
    email: "",
    name: "",
    timelinePosts: []
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
        getUser(props.id, token).then((res) => { console.log(res); setUser(res) })
    }, [props])
    return (
        <div className="profile-wrapper">
            <p>SHOW PROFILE COMPONENT</p>
            <p>{userInfo.role}</p>
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.isEmailVerified}</p>
        </div>
    )
}

export default ShowProfile;