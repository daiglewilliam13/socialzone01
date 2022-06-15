import React, { useEffect, useState } from 'react';
import TopNav from '../../components/TopNav/TopNav';
import SideNav from '../../components/SideNav/SideNav';
import CreatePost from '../../components/CreatePost/CreatePost';
import Feed from '../../components/Feed/Feed';
import FriendList from '../../components/FriendList/FriendList';
import './home.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


const Home = () => {
       const userInfo = useSelector((state:RootState)=>state.authStatus.auth.user)
       const user = {
              name: userInfo.name,
              id: userInfo.id
       }
       return (
              <>
                     <TopNav />
                     <SideNav />
                     <div className="home-wrapper">
                            <CreatePost user={user} />
                            <Feed />
                            <FriendList />
                     </div>
              </>
       )
}

export default Home;