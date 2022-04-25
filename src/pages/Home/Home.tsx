import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import SideNav from '../../components/SideNav/SideNav';
import CreatePost from '../../components/CreatePost/CreatePost';
import Feed from '../../components/Feed/Feed';
import FriendList from '../../components/FriendList/FriendList';


const Home = () => {
    return (
        <>
        <TopNav />
        <SideNav />
        <div className="home-wrapper">
        <CreatePost />
        <Feed />
        <FriendList />
        </div>
        </>
    )
}

export default Home;