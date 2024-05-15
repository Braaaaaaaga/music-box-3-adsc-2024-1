// Importações necessárias
import React from "react"; // Importa o React
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa componentes do React Router DOM
import Musicas from "./pages/musicas/Musicas"; // Importa o componente Musicas
import Home from "./pages/home/Home"; // Importa o componente Home
import NotFound from "./pages/notFound/NotFound"; // Importa o componente NotFound
import Adicionar from "./pages/adicionar/Adicionar"; // Importa o componente Adicionar
import Editar from "./pages/editar/Editar"; // Importa o componente Editar

// Função para definir as rotas da aplicação
function Rotas() {
    return (
        <>
            {/* Componente BrowserRouter para definir o roteamento baseado em navegador */}
            <BrowserRouter>
                {/* Componente Routes para definir as rotas da aplicação */}
                <Routes>
                    {/* Rota para a página inicial */}
                    <Route path="/" element={<Home />} />
                    {/* Rota para página não encontrada */}
                    <Route path="*" element={<NotFound />} />
                    {/* Rota para a página de músicas */}
                    <Route path="/musicas" element={<Musicas />} />
                    {/* Rota para a página de adicionar música */}
                    <Route path="/adicionar" element={<Adicionar />} />
                    {/* Rota para a página de editar música, com um parâmetro de ID */}
                    <Route path="/editar/:idCard" element={<Editar />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

// Exporta o componente Rotas
export default Rotas;