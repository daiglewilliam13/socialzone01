import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import SideNav from '../../components/SideNav/SideNav';
import CreatePost from '../../components/CreatePost/CreatePost';
import Feed from '../../components/Feed/Feed';


const Home = () => {
    return (
        <>
        <TopNav />
        <SideNav />
        <CreatePost />
        <Feed />
        </>
    )
}

export default Home;