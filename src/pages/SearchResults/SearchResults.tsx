import React, { useState, useEffect } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import { Link, useLocation, useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
    const [noResults, setNoResults] = useState(false)
    const [error, setError] = useState(false)
    const {query} = useParams()
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
                if(res.users.length==0 && res.posts.length==0){
                    setNoResults(true)
                } else {
                    setUsers(res.users)
                    setPosts(res.posts)
                }
            })
        } catch (err) {
            setError(true)
            console.log(err)
        } finally {
            setIsFetching(false)
        }
    }, [query])
    return (
        <>
            <SideNav />
            <TopNav />
            <div className={`content-wrapper ${classStr}`}>
                <p>SEARCH RESULTS</p>
                <div>
                    {userArray}
                </div>
                <div>
                    {postArray}
                </div>
            </div>
        </>
    )
}

export default SearchResults;