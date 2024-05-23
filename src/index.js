import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <LoginSignup />
  </React.StrictMode>
);