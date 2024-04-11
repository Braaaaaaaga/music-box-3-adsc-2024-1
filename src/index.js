import App from './App';
import Home from './pages/home/Home';
import Musicas from "./pages/musicas/Musicas";  
import "./utils/globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Musicas />
  </React.StrictMode>
);