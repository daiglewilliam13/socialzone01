import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import SideNav from '../../components/SideNav/SideNav';
import CreatePost from '../../components/CreatePost/CreatePost';


const Home = () => {
    return (
        <>
        <TopNav />
        <SideNav />
        <CreatePost />
        </>
    )
}

export default Home;