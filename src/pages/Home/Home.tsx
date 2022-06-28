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
       const userInfo = useSelector((state: RootState) => state.authStatus.auth.user)
       const user = {
              name: userInfo.name,
              id: userInfo.id
       }
       const allowSideBar = useSelector((state: RootState) => state.sideNavStatus.expanded)
       let classStr = allowSideBar == 'true' ? 'allow-sidebar' : '';
       return (
              <>
                     <TopNav />
                     <SideNav />
                     <div className={`content-wrapper ${classStr}`}>
                            <CreatePost user={user} />
                            <Feed />
                     </div>
              </>
       )
}

export default Home;