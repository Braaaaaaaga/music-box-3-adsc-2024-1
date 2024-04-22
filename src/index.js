import App from './App';
import React from 'react';
import "./utils/globals.css";
import "./utils/globals.js";
import ReactDOM from 'react-dom/client';
const root =
  ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);