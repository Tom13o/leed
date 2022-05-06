import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingContainer from './pages/LandingContainer';
import HomePage from './pages/HomePage';
import PrivateRoute from './pages/PrivateRoute';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import Profile from './pages/Profile';
import { AuthProvider } from './auth';
import Blog from './pages/Blog';
import { UserProvider } from './pages/UserProvider';
import UserBlog from './pages/UserBlog';

function App() {
  
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingContainer />}>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/user/:username" element={<UserProvider />} >
              <Route path="/user/:username" element={<Profile />} />
              <Route path="/user/:username/blog" element={<UserBlog />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
