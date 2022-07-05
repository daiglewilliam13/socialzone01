import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Following from './pages/Following/Following';
import Messages from './pages/Messages/Messages';
import SearchResults from './pages/SearchResults/SearchResults';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Notifications from './pages/Notifications/Notifications';
import PostView from './pages/PostView/PostView';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.authStatus.isLoggedIn)
  const id = useSelector((state: RootState) => state.authStatus.auth.user.id)
  console.log(isLoggedIn)
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={
            isLoggedIn ? <Home /> : <Navigate to="/" />
          } />
          <Route path={'/profile/:id/'} element={isLoggedIn ? <Profile /> : <Navigate to="/" />
          } />
          <Route path="/following/" element={isLoggedIn ? <Following /> : <Navigate to="/" />
          } />
          <Route path="/messages/" element={isLoggedIn ? <Messages /> : <Navigate to="/" />
          } />
          <Route path="/notifications/" element={isLoggedIn ? <Notifications /> : <Navigate to="/" />
          } />
          <Route path="/search/:query" element={isLoggedIn ? <SearchResults key={Date.now()} />  : <Navigate to="/" />
          } />
          <Route path="/post/:id" element={isLoggedIn ? <PostView /> : <Navigate to="/" />
          } />
        </Routes>
      </>
    </div>
  );
}

export default App;
