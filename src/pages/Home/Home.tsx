import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import SideNav from '../../components/SideNav/SideNav';
import CreatePost from '../../components/CreatePost/CreatePost';
import Feed from '../../components/Feed/Feed';
import FriendList from '../../components/FriendList/FriendList';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Home = () => {
    const user: {username?: String} = useSelector((state:RootState)=> state.userReducer)
    console.log(user.username)

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