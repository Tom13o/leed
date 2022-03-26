import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiY4E--_BeHsw6o2TaP0dIMO9mmlJCL_I",
  authDomain: "leed-d9196.firebaseapp.com",
  projectId: "leed-d9196",
  storageBucket: "leed-d9196.appspot.com",
  messagingSenderId: "213981652184",
  appId: "1:213981652184:web:11a8aab7b7d2ed39a863ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();