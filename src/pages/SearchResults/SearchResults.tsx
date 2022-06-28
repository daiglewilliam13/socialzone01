import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import Post from "../../components/Post/Post";

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

const SearchResults = () => {
    const [users, setUsers] = useState([initialProfileState]);
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(false)
    const { query } = useParams()
    const url: string = 'http://localhost:8080/v1/search/find?terms=' + query;
    let URL = 'http://localhost:8080/v1/search/'
    const getSearchResults = async (searchURL: string) => {
        const searchResults = await fetch(searchURL, {
            method: 'GET',
            mode: 'cors',
        })
        return searchResults.json();
    }
    const userArray = users.map((user) => {
        return (
            <>
                <p><Link to={`/profile/${user.id}`}>{user.name}</Link></p>
                <p>{user.email}</p>
                <p>{user.followers.length} followers</p>
                <p>{user.timelinePosts}</p>
            </>
        )
    })
    const postArray = posts.map((currentPost) => {
        return <Post post={currentPost} />
    })
    const allowSideBar = useSelector((state: RootState) => state.sideNavStatus.expanded)
    let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
    useEffect(() => {
        try {
            getSearchResults(url)
                .then((res) => {
                    setUsers(res.users)
                    setPosts(res.posts)
                })
        } catch (err) {
            setError(true)
            console.log(err)
        } finally {
            setIsFetching(false)
        }
    }, [query])
        return(
        <>
        <SideNav />
        <TopNav />
        <div className={`content-wrapper ${classStr}`}>
            <p>Search Results for: "{query}"</p>
            <p>{users.length<1 ? "No Users Found" : "Found Users:"}</p>
            <div>
                {userArray}
            </div>
                    <p>{posts.length < 1 ? "No Posts Found" : "Found Posts:"}</p>
            <div>
                {postArray}
            </div>
        </div>
    </>
    )
}

export default SearchResults;