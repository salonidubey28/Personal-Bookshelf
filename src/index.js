// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Correct path to the styles.css file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
