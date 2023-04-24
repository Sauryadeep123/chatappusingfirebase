import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_6XhGHXr2DYf_jHAx6BxePuOk8XTNTLw",
  authDomain: "chat-app-eb880.firebaseapp.com",
  projectId: "chat-app-eb880",
  storageBucket: "chat-app-eb880.appspot.com",
  messagingSenderId: "476905364373",
  appId: "1:476905364373:web:6bb0ba198d51236d59349c",
  measurementId: "G-C2CFJYZ2J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
