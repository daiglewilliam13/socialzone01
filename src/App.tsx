import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Friends from './pages/Friends/Friends';
import Messages from './pages/Messages/Messages';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Notifications from './pages/Notifications/Notifications';

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
          <Route path={'/profile/:id'} element={isLoggedIn ? <Profile /> : <Navigate to="/" />
          } />
          <Route path="/friends" element={isLoggedIn ? <Friends /> : <Navigate to="/" />
          } />
          <Route path="/messages" element={isLoggedIn ? <Messages /> : <Navigate to="/" />
          } />
          <Route path="/notifications" element={isLoggedIn ? <Notifications /> : <Navigate to="/" />
          } />
        </Routes>
      </>
    </div>
  );
}

export default App;
