import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import Post from "../../components/Post/Post";
import UserDisplayCard from "../../components/UserDisplayCard/UserDisplayCard";

const initialProfileState = {
    role: "",
    isEmailVerified: false,
    email: "",
    name: "",
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
        if(isFetching){
            return(
                <p>Fetching Users...</p>
            )
        } else {
            return (
                <>
                    <UserDisplayCard id={user.id} />
                </>
            )
        }
        })

        const postArray = posts.map((currentPost) => {
            if (isFetching) {
                return (
                    <p>Fetching Posts....</p>
                )
            } else {
                return <Post post={currentPost} />
            }
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
    return (
        <>
            <SideNav />
            <TopNav />
            <div className={`content-wrapper ${classStr}`}>
                <p>Search Results for: "{query}"</p>
                <p>{users.length < 1 ? "No Users Found" : `Found Users: ${users.length}`}</p>
                <div>
                    {userArray}
                </div>
                <p>{posts.length < 1 ? "No Posts Found" : `Found Posts: ${posts.length}`}</p>
                <div>
                    {postArray}
                </div>
            </div>
        </>
    )
}

export default SearchResults;