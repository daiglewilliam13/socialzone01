import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
