import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login';

function App() {
  
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/contact" element={<LandingPage />} />
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
