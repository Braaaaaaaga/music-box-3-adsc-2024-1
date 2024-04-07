// Importa o componente App, que é o componente principal da sua aplicação React.
import App from './App';
// Importa o React, a biblioteca base para construir componentes React.
import React from 'react';
// Importa ReactDOM para trabalhar com o DOM em uma aplicação web, mais especificamente, a função createRoot para a nova API do React 18+.
import ReactDOM from 'react-dom/client';

// Cria a raiz da aplicação, indicando onde o React vai renderizar o conteúdo no documento HTML. 
// 'document.getElementById('root')' seleciona o elemento com id 'root' no HTML como o ponto de ancoragem para a aplicação React.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do elemento root. 
// O uso de <React.StrictMode> envolvendo o <App /> é uma boa prática que ajuda a identificar componentes com potenciais problemas.
// StrictMode não renderiza nenhum UI visível. Ele ativa verificações e avisos adicionais para seus descendentes.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);