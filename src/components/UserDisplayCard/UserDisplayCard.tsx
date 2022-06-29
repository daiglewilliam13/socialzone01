import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import img from '../../images/john-doe.jpg';
import './userdisplaycard.css';

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
    const [user, setUser] = useState(initialProfileState)
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)
    const getQueryFilter = useSelector((state: RootState) =>
        state.followingFilter.query);
    const fetchUserInfo = async () => {
        const url = 'http://localhost:8080/v1/users/' + props.id;
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

    useEffect(() => {
        if(props.id.length>1) {
            fetchUserInfo().then((data) => {
                setUser(data)
            })
        }
    }, [props])
    if (getQueryFilter == "") {
        return (
            <>
                    <div className="card-wrapper">
                <Link to={`/profile/${user.id}`} className={"display-link"}>
                        <img className="card-image" src={img}></img>
                        <p className="username">{user.name}</p>
                        <p className="card-text">{user.followers.length} followers</p>
                        <p className="card-text">{user.following.length} following</p>
                </Link>
                    </div>
            </>
        )
    } else if (user.name.toLowerCase().includes(getQueryFilter.toLowerCase())) {
        return (
            <>
                    <div className="card-wrapper">
                <Link to={`/profile/${user.id}`} className={"display-link"}>
                        <img className="card-image username" src={img}></img>
                        <p className="username">{user.name}</p>
                        <p className="card-text">{user.followers.length} followers</p>
                        <p className="card-text">{user.following.length} following</p>
                </Link>
                    </div>
            </>
        )
    } else {
        return (
            <p></p>
        )

    }
}

export default UserDisplayCard;