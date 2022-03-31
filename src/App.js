import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingContainer from './pages/LandingContainer';
import HomePage from './pages/HomePage';
import PrivateRoute from './pages/PrivateRoute';
import Contact from './pages/Contact';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';

function App() {
  
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Prompt' rel='stylesheet'></link>
      <Routes>
        <Route path="/" element={<LandingContainer />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
