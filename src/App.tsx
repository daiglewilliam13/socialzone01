import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import { Routes, Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState } from './app/store';

function App() {
  const isLoggedIn = useSelector((state:RootState)=> state.authStatus.isLoggedIn)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home">
        {isLoggedIn ? <Redirect to="/home" /> : <Home/>}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
