import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Books from './pages/home';
import Category from './pages/category';

function App() {
  return (
    <div className="App align">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
