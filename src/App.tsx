import React from 'react';
import './App.css';
import Landing from './pages/Landing/Landing';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;
