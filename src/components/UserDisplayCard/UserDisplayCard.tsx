import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import img from '../../images/john-doe.jpg';

interface UserDisplayCardProps {
    id: string
}

const initialProfileState = {
    role: "",
    isEmailVerified: false,
    email: "",
    name: "",
    timelinePosts: [""],
    id: "",
    followers: [""],
    following: [""],
    createdAt: "",
}

const UserDisplayCard: React.FC<UserDisplayCardProps> = props => {
    const [isFetching, setIsFetching] = useState(true)
    const [user, setUser] = useState(initialProfileState)
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)

    const fetchUserInfo = async () => {
        const url = 'http://localhost:8080/v1/users/'+props.id;
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
        return response.json();
    }
    useEffect(()=>{
        fetchUserInfo().then((data)=>{
            console.log(data)
            setUser(data)
        })
    },[])
    return (
        <>
            <Link to={`/profile/${user.id}`}>
                <div>
                    <img className="profile-header-img" src={img}></img>
                    <p>{user.name}</p>
                    <p>{user.followers.length} followers</p>
                    <p>{user.following.length} following</p>
                </div>
            </Link>
        </>
    )
}

export default UserDisplayCard;