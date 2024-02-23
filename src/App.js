
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Download from './Download';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/download" element={<Download />} />     
      </Routes>
    </Router>
  );
};

export default App;