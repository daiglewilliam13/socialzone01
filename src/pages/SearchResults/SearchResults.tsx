import React, { useState, useEffect } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import { Link, useLocation } from "react-router-dom";

const initialProfileState = {
    role: "",
    isEmailVerified: false,
    email: "",
    name: "",
    timelinePosts: [""],
    timelineComments: [""],
    id: "",
    followers: [""],
    following: [""],
}

const getSearchResults = async (searchURL: string) =>{
    const searchResults = await fetch(searchURL, {
        method: 'GET',
        mode: 'cors',
    })
    return searchResults.json();
}
const SearchResults = () => {
    const location = useLocation();
    const terms = location.state || '';
    const url: string = 'http://localhost:8080/v1/search/?search='+terms;
    console.log(getSearchResults(url))
    const [users, setUsers] = useState([initialProfileState]);
    const [posts, setPosts] = useState([]);
    let URL = 'http://localhost:8080/v1/search/'
    const getResults = async () => {
        const response = await fetch(URL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json();
    }
    const userArray = users.map((user)=>{
        return(
            <>
            <p><Link to={`/profile/${user.id}`}>{user.name}</Link></p>
            <p>{user.email}</p>
            <p>{user.followers.length} followers</p>
            <p>{user.timelinePosts}</p>
            </>
        )
    })
    useEffect(() => {
        getResults()
    }, [])
    return (
        <>
            <SideNav />
            <TopNav />
            <p>SEARCH RESULTS</p>
            <button onClick={() =>
                getResults()
                    .then((res) => {
                        setUsers(res.users)
                        setPosts(res.posts)
                    }
                    )}
            >SEARCH</button>
            <div>
                {userArray}
            </div>
        </>
    )
}

export default SearchResults;