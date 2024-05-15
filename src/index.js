// Importações necessárias
import App from './App'; // Importa o componente principal da aplicação
import React from 'react'; // Importa o React
import "./utils/globals.css"; // Importa os estilos globais CSS
import "./utils/globals.js"; // Importa um arquivo JavaScript adicional (globals.js)
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM, usado para renderização

// Cria um novo Root para a aplicação usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do Root criado anteriormente
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);