import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState } from './app/store';

function App() {
  const isLoggedIn = useSelector((state:RootState)=> state.authStatus.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Landing />}/> 
        <Route path="/home" element={
        isLoggedIn ? <Home /> : <Navigate to="/" />
        }/>

      </Routes>
      </>
    </div>
  );
}

export default App;
